const { MongoClient } = require('mongodb')

const { URL, DB_NAME, NEWSLETTER_COLLECTION_ID } = require('./constants')

const client = new MongoClient(URL(), { useUnifiedTopology: true, useNewUrlParser: true })

const eraseCollection = async ({ collectionName }) => {
  try {
    await client.connect()

    const db = client.db(DB_NAME)
    const collection = db.collection(collectionName)

    await collection.deleteMany({})

    console.log('Collection erased successfully! Name: ', collectionName)
  } catch (err) {
    console.log(`Error during mongoDB collection set up: ${err.stack}`)
  } finally {
    await client.close()
  }
}

eraseCollection({ collectionName: NEWSLETTER_COLLECTION_ID })

module.exports = eraseCollection
