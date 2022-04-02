import { put } from 'redux-saga/effects';
import getState from '../../../../controller/helpers/getState';
import getServerURL from '../../../../controller/helpers/endpoints';

import fetchUrl from '../../../../utils/fetchUrl';

import { IStore } from '../../../../interfaces/IStore';

import { loadRegistrationDataSaved, loadRegistrationDataError } from '../actions';
import { requestError, setLogged } from '../../../../controller/actions';

function* loadRegistrationData() {
  const { registration }: IStore = yield getState();

  const { username, email, password, passwordConfirmation } = registration;

  const response = yield fetchUrl(`${getServerURL()}/api/registration`, {
    username,
    email,
    password,
    passwordConfirmation
  });

  if (response.error) {
    yield put(loadRegistrationDataError(response.error));

    return;
  }

  try {
    yield put(setLogged(response.success));
    yield put(loadRegistrationDataSaved());
  } catch (e) {
    console.error('Error: ', e);

    yield put(loadRegistrationDataError(e));
    yield put(requestError('Some error happen during request. Please try again later'));
  }
}

export default loadRegistrationData;
