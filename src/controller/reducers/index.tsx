// @ts-nocheck
// import { LOCATION_CHANGE } from 'connected-react-router';

import {
  NEWSLETTER_ATTEMPT,
  NEWSLETTER_ERROR,
  NEWSLETTER_SAVED,
  REQUEST_NOTIFY_ERROR,
  REQUEST_NOTIFY_SUCCESS,
  REQUEST_NOTIFY_CLEAR,
  SET_LOCALE,
  SET_LOGGED
} from '../../constants/index'

import {
  IRequestError,
  ISetLocale,
  INewsletterSaved,
  INewsletterAttempt,
  IRequestSuccess,
  ISetLogged
} from '../../interfaces/IController'
import { IState, IStore } from '../../interfaces/IStore'

import initialState from '../initialState'

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [REQUEST_NOTIFY_ERROR]: (state: IState, action: IRequestError) => ({
    ...state,
    error: action.errorMessage
  }),
  [REQUEST_NOTIFY_SUCCESS]: (state: IState, action: IRequestSuccess) => ({
    ...state,
    success: action.successMessage
  }),
  [REQUEST_NOTIFY_CLEAR]: (state: IState) => ({
    ...state,
    error: null
  }),
  // [LOCATION_CHANGE]: (state: IState, action: any) => ({
  //   ...state,
  //   locationChange: action.payload.location.pathname
  // }),
  [SET_LOCALE]: (state: IState, action: ISetLocale) => ({
    ...state,
    locale: action.language
  }),
  [SET_LOGGED]: (state: IState, action: ISetLogged) => ({
    ...state,
    isLogged: action.isLogged
  }),
  [NEWSLETTER_ATTEMPT]: (state: IState, action: INewsletterAttempt) => ({
    ...state,
    subscribeNewsletter: {
      ...state.subscribeNewsletter,
      userEmail: action.userEmail,
      isInProgress: true
    }
  }),
  [NEWSLETTER_SAVED]: (state: IState, action: INewsletterSaved) => ({
    ...state,
    subscribeNewsletter: {
      ...state.subscribeNewsletter,
      isInProgress: false,
      error: action.error,
      success: action.success
    }
  }),
  [NEWSLETTER_ERROR]: (state: IState, action: { error: string }) => ({
    ...state,
    subscribeNewsletter: {
      ...state.subscribeNewsletter,
      error: action.error,
      isInProgress: false
    }
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const reducer = (state: IStore = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state as any, action) : state
}

export default reducer
