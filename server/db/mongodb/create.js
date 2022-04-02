const { MongoClient } = require('mongodb');

const { URL, DB_NAME } = require('./constants');

const client = new MongoClient(URL(), { useUnifiedTopology: true });

const creteCollection = async ({ collectionName }) => {
  try {
    await client.connect();

    const db = client.db(DB_NAME);

    await db.collection(collectionName);

    console.log('Collection created successful! Name: ', collectionName);
  } catch (err) {
    console.log(`Error during mongoDB collection set up: ${err.stack}`);
  } finally {
    await client.close();
  }
};

module.exports = creteCollection;
