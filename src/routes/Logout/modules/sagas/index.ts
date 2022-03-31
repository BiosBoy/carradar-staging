import { takeLatest } from 'redux-saga/effects'

import logout from './logout'

import { LOGOUT_ATTEMPT } from '../../constants'

export default function* rootSaga() {
  yield takeLatest(LOGOUT_ATTEMPT, logout)
}
