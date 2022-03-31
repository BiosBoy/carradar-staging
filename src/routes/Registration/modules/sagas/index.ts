import { takeLatest } from 'redux-saga/effects'

import registration from './registration'

import { REGISTRATION_ATTEMPT } from '../../constants'

export default function* rootSaga() {
  yield takeLatest(REGISTRATION_ATTEMPT, registration)
}
