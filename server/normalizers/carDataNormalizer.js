const dataNormalizer = (data) => {
  const [
    someSign,
    uid,
    operationID,
    lastOperationType,
    lastOperation,
    otherID,
    serviceCenter,
    brand,
    model,
    vinCode,
    manufacturedYear,
    color,
    vehicleType,
    vehicleClass,
    vehicleCapacity,
    gasType,
    ID_1,
    ID_2,
    ID_3,
    carNumber
  ] = data;

  // just for test
  typeof uid === 'object' && console.log(someSign, ID_1, ID_2, ID_3);

  return {
    uid: uid || vinCode,
    image: null,
    mainData: {
      brand: brand.includes(' ') ? brand.match(/([^\s]*)/i)[0] : brand,
      model,
      color,
      vinCode: vinCode,
      number: carNumber,
      info: `${vehicleType} ${vehicleClass} ${vehicleCapacity}`,
      manufactured: manufacturedYear
    },
    collectedData: [
      {
        icon: 'manufacture',
        title: 'Manufacture',
        data: brand
      },
      {
        icon: 'manufacturedDate',
        title: 'Manufactured Date',
        data: `${manufacturedYear} year`
      },
      {
        icon: 'color',
        title: 'Color',
        data: color
      },
      {
        icon: 'gasType',
        title: 'Fuel Type',
        data: gasType
      },
      {
        icon: 'price',
        title: 'Market Price',
        data: '0'
      },
      {
        icon: 'lastOperation',
        title: 'Last Operation',
        data: lastOperation
      },
      {
        icon: 'lastOperationType',
        title: 'Operation Type',
        data: `${serviceCenter} [#${otherID}]: ${lastOperationType} [#${operationID}]`
      }
    ]
  };
};

module.exports = dataNormalizer;
