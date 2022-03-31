// some reducers here. The same link in on top level
import initialState from './initialState'

import { LOGIN_ATTEMPT, LOGIN_SAVED, LOGIN_ERROR, LOGIN_INPUT } from '../constants'
import { IStore } from '../interfaces/IStore'
import { IFetchError, ILoginInput } from '../interfaces/IController'

// ------------------------------------
// Action Handlers
// ------------------------------------
// you need to fill all of your reducers cases inside this object like an arrow functions
const ACTION_HANDLERS = {
  [LOGIN_ATTEMPT]: (state: IStore) => ({
    ...state,
    isLoginFetch: true
  }),
  [LOGIN_SAVED]: (state: IStore) => ({
    ...state,
    password: '',
    userdata: '',
    isLoginFetch: false
  }),
  [LOGIN_ERROR]: (state: IStore, action: IFetchError) => ({
    ...state,
    isLoginFetch: false,
    error: action.error
  }),
  [LOGIN_INPUT]: (state: IStore, action: ILoginInput) => ({
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
