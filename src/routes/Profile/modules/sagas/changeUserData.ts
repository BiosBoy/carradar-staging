import { put } from 'redux-saga/effects'

import getState from '../../../../controller/helpers/getState'
import getServerURL from '../../../../controller/helpers/endpoints'
import fetchUrl from '../../../../utils/fetchUrl'

import { saveNewDataSaved, saveNewDataError } from '../actions'
import { requestError } from '../../../../controller/actions'

import { IStore } from '../../../../interfaces/IStore'

function* loadProfileData() {
  const { profile }: IStore = yield getState()

  const { id, email, username, usersurname, bio, mobile, password, newPassword, newPasswordConfirm } = profile
  const data = {
    emailID: id,
    username: username,
    email: email,
    usersurname: usersurname,
    bio: bio,
    mobile: mobile,
    password: password,
    passwordNew: newPassword,
    passwordConfirmation: newPasswordConfirm
  }

  const response = yield fetchUrl(`${getServerURL()}/api/profile-change`, data)

  if (response.error) {
    yield put(saveNewDataError(response.error))
  }

  try {
    yield put(saveNewDataSaved(response.user.email))
  } catch (e) {
    console.error('Error: ', e)

    yield put(saveNewDataError(e))
    yield put(requestError('Some error happen during request. Please try again later'))
  }
}

export default loadProfileData
