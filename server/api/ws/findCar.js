/* eslint-disable max-statements */
const findCarData = require('../../controller/findCar/findCarData');
const findCarImage = require('../../controller/findCar/findCarImage');
const getRiaCarData = require('../../services/auto_ria/getRIACarData');

const dataNormalizer = require('../../normalizers/carDataNormalizer');
const updatePrice = require('../../utils/updatePrice');
// const checkSession = require('../../utils/checkSession');

const setCarCollection = require('../../db/mongodb/setCarCollection');

const findCarEndpoint = (ws, req) => {
  ws.on('message', async (payload) => {
    if (payload === 'ping') {
      ws.send('pong');

      return;
    }

    const data = JSON.parse(payload);

    console.log(data, 'MESSAGE');

    if (!data || !data.carNumber) {
      ws.send(JSON.stringify('Missed data'));

      return;
    }

    const carData = await findCarData({ findCardNumber: data.carNumber });

    console.log(carData, 'carData');

    if (!carData) {
      ws.send(JSON.stringify({ error: carData }));

      return;
    }

    const carNormalizedData = dataNormalizer(carData);

    const carImage = await findCarImage({
      brand: carNormalizedData.mainData.brand,
      model: carNormalizedData.mainData.model,
      color: carNormalizedData.mainData.color,
      manufactured: carNormalizedData.mainData.manufactured
    });

    const carRIAData = await getRiaCarData({
      brandName: carNormalizedData.mainData.brand,
      modelName: carNormalizedData.mainData.model
    });

    const responseData = {
      ...carNormalizedData,
      image: carImage,
      mainData: {
        ...carNormalizedData.mainData,
        price: carRIAData.average_price
      },
      collectedData: updatePrice({
        carData: carNormalizedData.collectedData,
        newPrice: carRIAData.average_price
      })
    };

    ws.send(
      JSON.stringify({
        data: responseData,
        type: 'home/CAR_SAVED'
      })
    );

    await setCarCollection(req, responseData);
  });
};

module.exports = findCarEndpoint;
