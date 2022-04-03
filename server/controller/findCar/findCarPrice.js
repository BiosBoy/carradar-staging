const fetch = require('node-fetch');

const findCarPrice = async ({ brandCode, modelCode } = {}) => {
  console.log('Getting Car Price: ', brandCode, modelCode);

  const URL_BASE = 'https://developers.ria.com/auto';
  const PRICE_SEARCH = 'average_price';
  const API_KEY = process.env.__RIA_TOKEN__;
  const OPTIONS = `marka_id=${brandCode}&model_id=${modelCode}&gear_id=1&gear_id=2`;

  let isError = null;
  let modelPriceData = null;

  try {
    const payload = await fetch(`${URL_BASE}/${PRICE_SEARCH}?api_key=${API_KEY}&${OPTIONS}`);

    if (!payload || payload.error) {
      console.log('Error:', `price data not found! ${payload?.error}`);

      isError = payload?.error || 'price not found';
    }

    modelPriceData = await payload?.json();
  } catch (e) {
    console.error('Some error while getting the car price:', e);
  }

  if (isError) {
    console.log('Error:', `price data not found! ${isError}`);

    return isError;
  }

  return modelPriceData;
};

module.exports = findCarPrice;
