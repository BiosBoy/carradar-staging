const findOne = require('./findOne');
const putOne = require('./putOne');
const updateOne = require('./updateOne');

const { CARS_COLLECTION_ID } = require('./constants');

const setCarCollection = async (req, responseData) => {
  console.log(req.session, 'set car to user history collection');

  if (!req.session.email) {
    return;
  }

  const userSearchCollection = await findOne({
    collectionName: CARS_COLLECTION_ID,
    entityData: {
      user: req.session.email
    }
  });

  if (userSearchCollection.entity?.searchHistory) {
    await updateOne({
      collectionName: CARS_COLLECTION_ID,
      filterData: {
        user: req.session.email
      },
      entityData: {
        searchHistory: [
          ...userSearchCollection.entity.searchHistory,
          {
            carData: responseData,
            timestamp: Date.now()
          }
        ]
      }
    });
  } else {
    await putOne({
      collectionName: CARS_COLLECTION_ID,
      entityData: {
        user: req.session.email,
        searchHistory: [
          {
            carData: responseData,
            timestamp: Date.now()
          }
        ]
      }
    });
  }
};

module.exports = setCarCollection;
