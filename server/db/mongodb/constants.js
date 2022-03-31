const URL = () => `mongodb+srv://${process.env.__MONGO_URL__}/sessions?retryWrites=true&w=majority`

const DB_NAME = 'carradar'
const NEWSLETTER_COLLECTION_ID = 'newsletter'
const USERS_COLLECTION_ID = 'users'
const CARS_COLLECTION_ID = 'cars'

module.exports = {
  URL,
  DB_NAME,
  NEWSLETTER_COLLECTION_ID,
  USERS_COLLECTION_ID,
  CARS_COLLECTION_ID
}
