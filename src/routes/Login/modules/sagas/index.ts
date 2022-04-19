import { takeLatest } from 'redux-saga/effects';

import login from './login';

import { USER_SOCIAL_DATA, LOGIN_ATTEMPT } from '../../constants';

export default function* rootSaga() {
  yield takeLatest(LOGIN_ATTEMPT, login);
  yield takeLatest(USER_SOCIAL_DATA, login);
}
