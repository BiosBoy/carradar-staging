import { put } from 'redux-saga/effects';

import getServerURL from '../../../../controller/helpers/endpoints';
import fetchUrl from '../../../../utils/fetchUrl';

import { eraseProfileData } from '../../../Profile/modules/actions';
import { loadLogoutDataSaved, loadLogoutDataError, setManualLogout } from '../actions';
import { requestError, setLogged } from '../../../../controller/actions';

function* loadLogoutData() {
  const response = yield fetchUrl(`${getServerURL()}/api/logout`);

  try {
    yield put(setManualLogout(true));
    yield put(setLogged(false));
    yield put(loadLogoutDataSaved());
    yield put(eraseProfileData());

    console.log(response);
  } catch (e) {
    console.error('Error: ', e);

    yield put(loadLogoutDataError(e));
    yield put(requestError('Some error happen during request. Please try again later'));
  }
}

export default loadLogoutData;
