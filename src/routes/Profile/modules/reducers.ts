// some reducers here. The same link in on top level
import initialState from './initialState'

import {
  PROFILE_ATTEMPT,
  PROFILE_SAVED,
  PROFILE_ERROR,
  PROFILE_CHANGE_ATTEMPT,
  PROFILE_CHANGE_ERROR,
  PROFILE_CHANGE_SAVED,
  CHANGE_PROFILE_DATA,
  ERASE_PROFILE
} from '../constants'
import { IStore } from '../interfaces/IStore'
import { IFetchSaved, IFetchError, IChangeProfileData } from '../interfaces/IController'

// ------------------------------------
// Action Handlers
// ------------------------------------
// you need to fill all of your reducers cases inside this object like an arrow functions
const ACTION_HANDLERS = {
  [PROFILE_ATTEMPT]: (state: IStore) => ({
    ...state,
    isProfileFetch: true
  }),
  [PROFILE_SAVED]: (state: IStore, action: IFetchSaved) => ({
    ...state,
    username: action.username,
    email: action.email,
    id: action.email,
    mobile: action.mobile,
    bio: action.bio,
    usersurname: action.usersurname,
    searchHistory: action.searchHistory,
    isProfileFetch: false
  }),
  [PROFILE_ERROR]: (state: IStore, action: IFetchError) => ({
    ...state,
    isProfileFetch: false,
    error: action.error
  }),
  [PROFILE_CHANGE_ATTEMPT]: (state: IStore) => ({
    ...state,
    isProfileChangeFetch: true
  }),
  [PROFILE_CHANGE_SAVED]: (state: IStore, action: { emailID: string }) => ({
    ...state,
    id: action.emailID,
    isProfileChangeFetch: false
  }),
  [PROFILE_CHANGE_ERROR]: (state: IStore, action: IFetchError) => ({
    ...state,
    isProfileFetch: false,
    error: action.error
  }),
  [CHANGE_PROFILE_DATA]: (state: IStore, action: IChangeProfileData) => ({
    ...state,
    [action.id]: action.value
  }),
  [ERASE_PROFILE]: (state: IStore) => ({
    ...state,
    username: '',
    email: '',
    id: '',
    mobile: '',
    bio: '',
    usersurname: '',
    searchHistory: '',
    isProfileFetch: false,
    error: null
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
// you need to place here right typization and initialState bind
const reducer = (state: IStore = initialState, action: any) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export default reducer
