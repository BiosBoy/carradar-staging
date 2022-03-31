const fetch = require('node-fetch');

const findCarPrice = async ({ brandCode, modelCode } = {}) => {
  console.log('Getting Car Price: ', brandCode, modelCode);

  const URL_BASE = 'https://developers.ria.com/auto';
  const PRICE_SEARCH = 'average_price';
  const API_KEY = 'pAVQYjVlfVJNz2nmVD3WVRzWE5cKX6W0tCdHYlae';
  const OPTIONS = `marka_id=${brandCode}&model_id=${modelCode}&gear_id=1&gear_id=2`;

  const payload = await fetch(`${URL_BASE}/${PRICE_SEARCH}?api_key=${API_KEY}&${OPTIONS}`);
  const modelPriceData = await payload?.json();

  if (!payload || payload.error) {
    console.log('Error:', `price data not found! ${payload?.error}`);

    return payload?.error || 'price not found';
  }

  return modelPriceData;
};

module.exports = findCarPrice;
