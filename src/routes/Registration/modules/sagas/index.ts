import { takeLatest } from 'redux-saga/effects';

import registration from './registration';

import { REGISTRATION_ATTEMPT, SOCIAL_REGISTRATION_DATA } from '../../constants';

export default function* rootSaga() {
  yield takeLatest(REGISTRATION_ATTEMPT, registration);
  yield takeLatest(SOCIAL_REGISTRATION_DATA, registration);
}
