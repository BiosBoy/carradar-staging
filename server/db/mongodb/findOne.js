const { MongoClient } = require('mongodb')

const { URL, DB_NAME } = require('./constants')

const findOne = async ({ collectionName, entityData }) => {
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

        const entity = await collection.findOne(entityData.map ? { $or: entityData } : entityData)

        if (entity) {
          resolve({
            status: 'found',
            entity
          })

          return
        }

        resolve({
          status: 'error',
          success: false
        })
      } catch (error) {
        console.log(`Error during mongoB findOne operation set up: ${error.stack}`)
      } finally {
        console.log('findOne connection closed!')

        await client.close()
      }
    })
  })

  return result
}

module.exports = findOne
