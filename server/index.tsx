const fs = require('fs');
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const expressWs = require('express-ws');
const https = require('https');
const prerender = require('prerender-node');

const routes = require('./routes');
const cors = require('./utils/cors');
const redirectToHTTPS = require('./helpers/redirectToHTTPS');
const createSession = require('./session/createSession');
const { restAPI, wsFindCarAPI } = require('./api');
const setAWSProfile = require('./db/aws/setProfile');
const getMongoURL = require('./db/mongodb/getMongoURL');
const getPrerenderToken = require('./prerender/getPrerenderToken');
const loginStateManager = require('./session/loginStateManager');
const getSessionData = require('./session/getSessionData');
const getCarsxeToken = require('./carsxe/getToket');
const getRiaToken = require('./db/ria/getToket');
const runCrons = require('./crons');

const PORT = process.env.ENV_LOCAL === 'true' ? 3002 : process.env.PORT;

const HEADERS_FIRST = 'Origin, Accept, X-Requested-With, Content-Type';
const HEADERS_SECOND = 'Access-Control-Request-Method, Access-Control-Request-Headers';

const server = express();

expressWs(server);

const func = async () => {
  await setAWSProfile();
  await getMongoURL();
  await getSessionData();
  await getPrerenderToken();
  await getCarsxeToken();
  await getRiaToken();

  runCrons();

  server
    .set('trust proxy', 1)
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', cors(req));
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
      res.setHeader('Access-Control-Allow-Headers', `${HEADERS_FIRST}, ${HEADERS_SECOND}`);
      res.setHeader('Cache-Control', 'public, max-age=86400');
      next();
    })
    .use(cookieParser())
    .use(createSession())
    .use(loginStateManager)
    .use(express.static(path.resolve(__dirname, '../public')))
    .use('/assets', express.static(path.join(__dirname, '../assets')))
    .use('/robots.txt', express.static(path.join(__dirname, '../assets/robots.txt')))
    .use('/sitemap.xml', express.static(path.join(__dirname, '../assets/sitemap.xml')))
    .use(prerender.set('prerenderToken', process.env.__PRERENDER_TOKEN__))
    .use((req, res, next) => redirectToHTTPS(req, res, next))
    .use(restAPI)
    .ws('/', wsFindCarAPI)
    .use('/', routes.csr);

  if (process.env.DEV_SERVER) {
    const serverSecure = https.createServer(
      {
        key: fs.readFileSync(path.resolve(__dirname, '../bin/ssl/localhost.key')),
        cert: fs.readFileSync(path.resolve(__dirname, '../bin/ssl/localhost.crt'))
      },
      server
    );

    expressWs(server, serverSecure);

    serverSecure.listen(PORT);
  } else {
    // real world server works over HTTPS by default
    server.listen(PORT);

    // ----------------------
    // WebSockets Runner
    // ----------------------
    expressWs(server);
  }

  console.log('Server is Started. Port: ', PORT);
};

func();
