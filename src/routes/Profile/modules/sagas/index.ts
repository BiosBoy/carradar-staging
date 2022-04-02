import { takeLatest } from 'redux-saga/effects';

import profile from './loadUserData';
import profileChange from './changeUserData';

import { PROFILE_ATTEMPT, PROFILE_CHANGE_ATTEMPT } from '../../constants';

export default function* rootSaga() {
  yield takeLatest(PROFILE_ATTEMPT, profile);
  yield takeLatest(PROFILE_CHANGE_ATTEMPT, profileChange);
}
