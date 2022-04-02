const findCarData = require('../../controller/findCar/findCarData');
const findCarImage = require('../../controller/findCar/findCarImage');
const getRiaCarData = require('../../services/auto_ria/getRIACarData');

const dataNormalizer = require('../../normalizers/carDataNormalizer');
const updatePrice = require('../../utils/updatePrice');
const checkSession = require('../../utils/checkSession');

const findCarEndpoint = async (req, res) => {
  if (!checkSession(req, res)) {
    res.send(JSON.stringify('Unauthorized'));

    return;
  }

  if (!req.body || !req.body.carNumber) {
    res.send(JSON.stringify('Missed data'));

    return;
  }

  const carData = await findCarData({ findCardNumber: req.body.carNumber });

  if (!carData) {
    res.send(JSON.stringify({ error: carData }));

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

  res.send(JSON.stringify({ data: responseData }));
};

module.exports = findCarEndpoint;
