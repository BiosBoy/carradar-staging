import { takeLatest } from 'redux-saga/effects'

import saveCarData from './saveCarData'

import { CAR_ATTEMPT } from '../../constants'

export default function* rootSaga() {
  yield takeLatest(CAR_ATTEMPT, saveCarData)
}
