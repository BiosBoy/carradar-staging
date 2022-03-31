// some reducers here. The same link in on top level
import initialState from './initialState'

import { REGISTRATION_ATTEMPT, REGISTRATION_SAVED, REGISTRATION_ERROR, REGISTRATION_INPUT } from '../constants'
import { IStore } from '../interfaces/IStore'
import { IFetchError, IRegistrationInput } from '../interfaces/IController'

// ------------------------------------
// Action Handlers
// ------------------------------------
// you need to fill all of your reducers cases inside this object like an arrow functions
const ACTION_HANDLERS = {
  [REGISTRATION_ATTEMPT]: (state: IStore) => ({
    ...state,
    isRegistrationFetch: true
  }),
  [REGISTRATION_SAVED]: (state: IStore) => ({
    ...state,
    email: '',
    error: null,
    isRegistrationFetch: false,
    password: '',
    passwordConfirmation: '',
    username: ''
  }),
  [REGISTRATION_ERROR]: (state: IStore, action: IFetchError) => ({
    ...state,
    isRegistrationFetch: false,
    error: action.error
  }),
  [REGISTRATION_INPUT]: (state: IStore, action: IRegistrationInput) => ({
    ...state,
    [action.id]: action.value
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
