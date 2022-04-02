const fetch = require('node-fetch');

const colorNormalizer = require('../../normalizers/colorNormalizer');

const { MAX_CAR_IMAGES_REQUESTS } = require('../../constants/crons');

const imageRequestCounter = () => {
  process.env.__MAX_CAR_IMAGE_REQUESTS__ = !process.env.__MAX_CAR_IMAGE_REQUESTS__ ?
    1 :
    Number(process.env.__MAX_CAR_IMAGE_REQUESTS__) + 1;

  console.log('process.env.__MAX_CAR_IMAGE_REQUESTS__: ', process.env.__MAX_CAR_IMAGE_REQUESTS__);
};

const findCarImage = async ({ brand, model, color, manufactured } = {}) => {
  imageRequestCounter();

  console.log('Getting Car Image: ', brand, model, color, manufactured);

  if (Number(process.env.__MAX_CAR_IMAGE_REQUESTS__) >= MAX_CAR_IMAGES_REQUESTS) {
    return 'max images request reached!';
  }

  const URL_BASE = 'https://api.carsxe.com/images';
  const API_KEY = process.env.__CARSXE_TOKEN__;
  const DEFAULT_PARAMS = 'angle=side&transparent=true&license=public&format=json&size=large&angle=side';
  const PARAMS = `make=${brand}&model=${model}&year=${manufactured}&color=${colorNormalizer(color)}&${DEFAULT_PARAMS}`;

  const payload = await fetch(`${URL_BASE}?key=${API_KEY}&${PARAMS}`);

  if (!payload || payload.error) {
    console.log('Error:', `image not found! ${payload?.error}`);

    return payload?.error || 'image not found';
  }

  const imageData = await payload?.json();

  return (imageData.images && imageData.images[0] && imageData.images[0].link) || '';
};

module.exports = findCarImage;
