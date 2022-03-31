const express = require('express');
const restAPI = express.Router();

const findCarEndpoint = require('./post/findCar');
const subscribeNewsletter = require('./post/newsletter');
const registration = require('./post/registration');
const login = require('./post/login');
const profileChange = require('./post/profileChange');

const home = require('./get/home');
const registrationPage = require('./get/registration');
const loginPage = require('./get/login');
const logoutPage = require('./get/logout');
const profilePage = require('./get/profile');

const wsFindCarAPI = require('./ws/findCar');

restAPI.post('/api/find-car', findCarEndpoint);
restAPI.post('/api/subscribe-newsletter', subscribeNewsletter);
restAPI.post('/api/registration', registration);
restAPI.post('/api/login', login);
restAPI.post('/api/profile-change', profileChange);
restAPI.get('/api/profile', profilePage);
restAPI.get('/api/logout', logoutPage);
restAPI.get('/*/sign-up', registrationPage);
restAPI.get('/*/sign-in', loginPage);
restAPI.get('/', home);

module.exports = {
  restAPI,
  wsFindCarAPI
};
