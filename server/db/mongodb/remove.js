const { MongoClient } = require('mongodb');

const { URL, DB_NAME } = require('./constants');

const remove = async ({ collectionName, entityData = {} }) => {
  const result = await new Promise((resolve, _reject) => {
    MongoClient.connect(URL(), { useNewUrlParser: true, useUnifiedTopology: true }, async (_err, client) => {
      try {
        if (_err) {
          resolve({
            error: _err
          });
        }

        const db = client.db(DB_NAME);
        const collection = db.collection(collectionName);

        await collection.remove(entityData);

        resolve({
          success: true
        });
      } catch (error) {
        console.log(`Error during mongoB remove operation set up: ${error.stack}`);
      } finally {
        console.log('remove connection closed!');

        await client.close();
      }
    });
  });

  return result;
};

module.exports = remove;
