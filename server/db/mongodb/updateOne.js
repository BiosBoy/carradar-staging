const { MongoClient } = require('mongodb')

const { URL, DB_NAME } = require('./constants')

const updateOne = async ({ collectionName, filterData, entityData }) => {
  const result = await new Promise((resolve, _reject) => {
    MongoClient.connect(URL(), { useNewUrlParser: true, useUnifiedTopology: true }, async (_err, client) => {
      try {
        if (_err) {
          resolve({
            error: _err
          })
        }

        const db = client.db(DB_NAME)
        const collection = db.collection(collectionName)

        const entity = await collection.updateOne(filterData, {
          $set: entityData
        })

        resolve({
          status: 'success',
          entity
        })
      } catch (error) {
        console.log(`Error during mongoB updateOne operation set up: ${error.stack}`)
      } finally {
        console.log('updateOne connection closed!')

        await client.close()
      }
    })
  })

  return result
}

module.exports = updateOne
