// some reducers here. The same link in on top level
import initialState from './initialState';

import { LOGOUT_ATTEMPT, LOGOUT_SAVED, LOGOUT_ERROR, MANUAL_LOGOUT } from '../constants';
import { IStore } from '../interfaces/IStore';
import { IFetchError, ISetManualLogout } from '../interfaces/IController';

// ------------------------------------
// Action Handlers
// ------------------------------------
// you need to fill all of your reducers cases inside this object like an arrow functions
const ACTION_HANDLERS = {
  [LOGOUT_ATTEMPT]: (state: IStore) => ({
    ...state,
    isLogoutFetch: true
  }),
  [LOGOUT_SAVED]: (state: IStore, action: any) => ({
    ...state,
    isManualReload: true,
    isLogoutFetch: false,
    error: action.error || state.error
  }),
  [LOGOUT_ERROR]: (state: IStore, action: IFetchError) => ({
    ...state,
    isLogoutFetch: true,
    error: action.error
  }),
  [MANUAL_LOGOUT]: (state: IStore, action: ISetManualLogout) => ({
    ...state,
    isManualReload: action.status
  })
};

// ------------------------------------
// Reducer
// ------------------------------------
// you need to place here right typization and initialState bind
const reducer = (state: IStore = initialState, action: any) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};

export default reducer;
