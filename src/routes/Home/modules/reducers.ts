// some reducers here. The same link in on top level
import initialState from './initialState';

import { CAR_ATTEMPT, CAR_SAVED, CAR_ERROR } from '../constants';
import { IStore } from '../interfaces/IStore';
import { IFetchAttempt, IFetchSaved } from '../interfaces/IController';
import { WS_DISCONNECTED } from '../../../constants';

// ------------------------------------
// Action Handlers
// ------------------------------------
// you need to fill all of your reducers cases inside this object like an arrow functions
const ACTION_HANDLERS = {
  [CAR_ATTEMPT]: (state: IStore, action: IFetchAttempt) => ({
    ...state,
    searchCarNumber: action.carNumber,
    statuses: {
      isSearchInProgress: true,
      isSearchError: false
    }
  }),
  [CAR_SAVED]: (state: IStore, action: IFetchSaved) => ({
    ...state,
    carData: action.payload,
    statuses: {
      isSearchError: !action.payload,
      isSearchInProgress: false
    }
  }),
  [CAR_ERROR]: (state: IStore) => ({
    ...state,
    statuses: {
      isSearchError: true,
      isSearchInProgress: false
    },
    error: null
  }),
  [WS_DISCONNECTED]: (state: IStore) => ({
    ...state,
    statuses: {
      // eslint-disable-next-line react/destructuring-assignment
      isSearchError: state.statuses.isSearchInProgress,
      isSearchInProgress: false
    },
    error: null
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
