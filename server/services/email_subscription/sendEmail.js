const nodemailer = require('nodemailer');

const getEmailTemplate = require('./getEmailTemplate');

const isEmailValid = require('../../utils/isValidEmail');

const sendEmail = async ({ emailSendTo }) => {
  const account = await nodemailer.createTestAccount();

  if (!emailSendTo || !isEmailValid(emailSendTo)) {
    console.log('Bad email received. Nothing will be send. Email: ', emailSendTo);

    return;
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: account.user,
      pass: account.pass
    }
  });

  const templateData = await getEmailTemplate();

  const emailSendData = await transporter.sendMail({
    from: '"CarRadar " <support@carradar.com.ua>',
    to: emailSendTo,
    subject: 'Test Newsletter Subscription ✔',
    text: 'Congratulation! You have been subscribed!',
    html: templateData || '<b>Newsletter subscription was successful.</b>'
  });

  console.log('Message sent: %s', emailSendData.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(emailSendData));
};

module.exports = sendEmail;
