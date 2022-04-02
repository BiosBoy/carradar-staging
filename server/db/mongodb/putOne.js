const { MongoClient } = require('mongodb');

const { URL, DB_NAME } = require('./constants');

const putOne = async ({ collectionName, entityData }) => {
  const result = await new Promise((resolve, _reject) => {
    MongoClient.connect(URL(), { useNewUrlParser: true, useUnifiedTopology: true }, async (_err, client) => {
      try {
        const db = client.db(DB_NAME);
        const collection = db.collection(collectionName);

        const alreadyAdded = await collection.findOne(entityData);

        if (alreadyAdded) {
          console.log('ERROR! Entity is already added: ', entityData);

          resolve({
            error: 'entity is already added'
          });

          return;
        }

        await collection.insertOne(entityData);

        console.log(`New record added into DB ${DB_NAME}, collection: ${collectionName}`);
        console.log(`Entity: ${JSON.stringify(entityData)}`);

        // const allEntities = await collection.find({}).toArray();
        // console.log(`All Entities: ${JSON.stringify(allEntities)}`);

        resolve({
          success: true
        });
      } catch (error) {
        console.log(`Error during mongoB putOne operation set up: ${error.stack}`);
      } finally {
        console.log('putOne connection closed!');

        await client.close();
      }
    });
  });

  return result;
};

module.exports = putOne;
