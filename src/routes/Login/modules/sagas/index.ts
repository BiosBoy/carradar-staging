import { takeLatest } from 'redux-saga/effects'

import login from './login'

import { LOGIN_ATTEMPT } from '../../constants'

export default function* rootSaga() {
  yield takeLatest(LOGIN_ATTEMPT, login)
}
