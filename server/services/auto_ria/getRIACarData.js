const findBrandCars = require('../../controller/findCar/findBrandCars');
const findCarPrice = require('../../controller/findCar/findCarPrice');

const getBrandCode = require('./helpers/getBrandCode');
const getModelData = require('./helpers/getModelData');

const getRIACarData = async ({ brandName, modelName }) => {
  const brandID = getBrandCode({ brandName });
  const brandCars = await findBrandCars({ brandCode: brandID });
  const modelData = getModelData({ modelsList: brandCars, modelName });

  const carModelPrice = await findCarPrice({ brandCode: brandID, modelCode: modelData.model_id });

  return {
    average_price: carModelPrice?.arithmeticMean?.toFixed(0) || 'undefined',
    ...modelData
  };
};

module.exports = getRIACarData;
