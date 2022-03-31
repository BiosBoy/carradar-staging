const { MongoClient } = require('mongodb')

const { URL, DB_NAME } = require('./constants')

const client = new MongoClient(URL(), { useUnifiedTopology: true })

const connect = async () => {
  try {
    await client.connect()

    await client.db(DB_NAME)

    console.log('Connected correctly to server. DB name: ', DB_NAME)
  } catch (err) {
    console.log(`Error during mongoDB initialization: ${err.stack}`)
  } finally {
    await client.close()
  }
}

module.exports = connect
