const putOne = require('../../db/mongodb/putOne');
const sendEmail = require('../../services/email_subscription/sendEmail');

const { NEWSLETTER_COLLECTION_ID } = require('../../db/mongodb/constants');

// const checkSession = require('../../utils/checkSession');

const subscribeNewsletter = async (req, res) => {
  // if (!checkSession(req, res)) {
  //   res.send(JSON.stringify('Unauthorized'));

  //   return;
  // }

  if (!req.body || !req.body.email) {
    res.send(JSON.stringify({ error: 'missed data to subscribe the user' }));

    return;
  }

  const result = await putOne({
    collectionName: NEWSLETTER_COLLECTION_ID,
    entityData: {
      email: req?.body?.email
    }
  });

  if (result.success) {
    await sendEmail({ emailSendTo: req?.body?.email });
  }

  res?.send(JSON.stringify(result));
};

module.exports = subscribeNewsletter;
