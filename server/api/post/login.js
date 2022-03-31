const findOne = require('../../db/mongodb/findOne')
const comparePass = require('../../utils/comparePass')
const { USERS_COLLECTION_ID } = require('../../db/mongodb/constants')

const login = async (req, res) => {
  console.log(req.body, 'Login attempt')

  if (req.session.email) {
    return res.send(JSON.stringify({ error: 'You are logged in already. Please logout first' }))
  }

  if (!req.body.userdata || !req.body.password) {
    return res.send(JSON.stringify('{ error: All fields required }'))
  }

  const user = await findOne({
    collectionName: USERS_COLLECTION_ID,
    entityData: [
      {
        email: req?.body?.userdata
      },
      {
        username: req?.body?.userdata
      }
    ]
  })

  const isPasswordMatch = await comparePass(req.body.password, user.entity?.password)
  const isUserFound = user.status === 'found'

  if (!isUserFound || user === null || isPasswordMatch.status === 'error') {
    return res.send(JSON.stringify({ error: 'User not found. Wrong email, username or password' }))
  }

  req.session.email = user.entity.email
  req.session.password = req?.body?.password
  console.log('User is logged in:', req.session.email)

  res.cookie('isLogged', true, { maxAge: 86400000, httpOnly: false })
  res.send(JSON.stringify({ status: 'Logged in successfully' }))
}

module.exports = login
