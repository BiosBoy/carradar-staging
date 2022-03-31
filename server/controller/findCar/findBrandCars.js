const fetch = require('node-fetch');

const findBrandCars = async ({ brandCode } = {}) => {
  console.log('Getting Brand Cars: ', brandCode);

  const URL_BASE = 'https://developers.ria.com/auto';
  const MODEL_SEARCH = 'new/models';
  const API_KEY = 'pAVQYjVlfVJNz2nmVD3WVRzWE5cKX6W0tCdHYlae';
  const OPTIONS = `marka_id=${brandCode}&gear_id=1&gear_id=2`;

  const payload = await fetch(`${URL_BASE}/${MODEL_SEARCH}?api_key=${API_KEY}&${OPTIONS}`);
  const modelsData = await payload?.json();

  if (!payload || payload.error) {
    console.log('Error:', `model data not found! ${payload?.error}`);

    return payload?.error || 'model not found';
  }

  return modelsData;
};

module.exports = findBrandCars;
