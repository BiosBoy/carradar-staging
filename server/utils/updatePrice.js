const updatePrice = ({ carData, newPrice }) => {
  const isPriceObj = (data) => data.icon === 'price';

  const newData = carData.map((dataObj) => {
    return isPriceObj(dataObj) ?
      {
        ...dataObj,
        data: newPrice
      } :
      dataObj;
  });

  return newData;
};

module.exports = updatePrice;
