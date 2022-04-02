const { MAX_CAR_IMAGES_REQUESTS } = require('../constants/crons');

const MILLISECONDS = 1000;
const DAY_SECONDS_COUNT = 86400;

const dropMaxCarImage = () => {
  let dateNow = Math.round(Date.now() / MILLISECONDS);

  setInterval(() => {
    const dateNowInner = Math.round(Date.now() / MILLISECONDS);

    if (dateNowInner - dateNow >= DAY_SECONDS_COUNT) {
      process.env.__MAX_CAR_IMAGE_REQUESTS__ = MAX_CAR_IMAGES_REQUESTS;

      dateNow = dateNowInner;
    }
  }, 1000);
};

module.exports = dropMaxCarImage;
