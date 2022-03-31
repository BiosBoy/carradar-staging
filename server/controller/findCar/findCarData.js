const searchCar = require('../../db/aws/searchCar');

const DB_LIST = ['2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013'];

const findCarData = async (carData = {}) => {
  let carFinalData = null;

  const fetchList = DB_LIST.map((year) => {
    console.log('Starting Search in the year', year, 'for car number: ', carData.findCardNumber);

    return searchCar(year, carData.findCardNumber);
  });

  await new Promise((resolve, _reject) => {
    Promise.race(fetchList).then((value) => {
      console.log('Final value:', value);

      carFinalData = value;
      resolve(value);
    });
  });

  return carFinalData;
};

// findCarData('АТ8760ЕТ');

module.exports = findCarData;
