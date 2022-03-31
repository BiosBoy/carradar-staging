const brands = require('../../../db/ria/brands');

const getBrandCode = ({ brandName }) => {
  const currentBrand = brands.find((brand) => brand?.name?.toLocaleLowerCase() === brandName.toLocaleLowerCase());

  return currentBrand.marka_id || 'undefined';
};

module.exports = getBrandCode;
