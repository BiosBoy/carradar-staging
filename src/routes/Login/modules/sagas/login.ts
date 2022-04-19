import { put } from 'redux-saga/effects';
import getState from '../../../../controller/helpers/getState';
import getServerURL from '../../../../controller/helpers/endpoints';

import fetchUrl from '../../../../utils/fetchUrl';

import { IStore } from '../../../../interfaces/IStore';

import { loadLoginDataSaved, loadLoginDataError } from '../actions';
import { requestError, setLogged } from '../../../../controller/actions';

function* loadLoginData() {
  const { login }: IStore = yield getState();

  const { token, userdata, password, isSocial } = login;

  const response = yield fetchUrl(`${getServerURL()}/api/login`, {
    token,
    userdata,
    password,
    isSocial
  });

  if (response.error) {
    yield put(loadLoginDataError(response.error));

    return;
  }

  try {
    yield put(setLogged(!response.error));
    yield put(loadLoginDataSaved());
  } catch (e) {
    console.error('Error: ', e);

    yield put(loadLoginDataError(e));
    yield put(requestError('Some error happen during request. Please try again later'));
  }
}

export default loadLoginData;
