import { select } from 'redux-saga/effects';

import { IStore } from '../../interfaces/IStore';

function* getState() {
  const state: IStore = yield select();

  return state;
}

export default getState;
