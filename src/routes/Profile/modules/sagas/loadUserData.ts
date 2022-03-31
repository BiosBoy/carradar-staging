import { put } from 'redux-saga/effects'

import getServerURL from '../../../../controller/helpers/endpoints'
import fetchUrl from '../../../../utils/fetchUrl'

import { loadProfileDataSaved, loadProfileDataError } from '../actions'
import { requestError } from '../../../../controller/actions'

function* loadProfileData() {
  const response = yield fetchUrl(`${getServerURL()}/api/profile`)

  if (response.error) {
    yield put(loadProfileDataError(response.error))

    return
  }
  try {
    yield put(
      loadProfileDataSaved(
        response.username,
        response.email,
        response.mobile,
        response.bio,
        response.usersurname,
        response.searchHistory
      )
    )
  } catch (e) {
    console.error('Error: ', e)

    yield put(loadProfileDataError(e))
    yield put(requestError('Some error happen during request. Please try again later'))
  }
}

export default loadProfileData
