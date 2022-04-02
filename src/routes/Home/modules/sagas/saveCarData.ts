import { put } from 'redux-saga/effects';
import getState from '../../../../controller/helpers/getState';
// import fetchUrl from '../../../../utils/fetchUrl';
import { IStore } from '../../../../interfaces/IStore';
// import getServerURL from '../../../../controller/helpers/endpoints';

import { loadCarDataError, wsSendMessage } from '../actions';
import { requestError } from '../../../../controller/actions';

function* loadMainData() {
  const { home }: IStore = yield getState();

  try {
    yield put(wsSendMessage({ carNumber: home.searchCarNumber }));
  } catch (e) {
    console.error('Error: ', e);

    yield put(loadCarDataError());
    yield put(requestError('Some error happen during request. Please try again later'));
  }
}

export default loadMainData;
