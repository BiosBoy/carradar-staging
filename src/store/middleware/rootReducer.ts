import { History } from 'history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createResponsiveStateReducer } from 'redux-responsive';

import app from '../../controller/reducers/index';
import home from '../../routes/Home/modules/reducers';

import isServer from '../../utils/isServer';

const makeRootReducer = (asyncReducers?: any, history?: History) => {
  return combineReducers({
    ...asyncReducers,
    app,
    ...(isServer() ?
      {
        home
      } :
      {}),
    router: connectRouter(history),
    browser: createResponsiveStateReducer({
      mobile: 600,
      tablet: 1000,
      desktop: 5000
    })
  });
};

export const injectReducer = (store, { key, reducer }, history) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;
  store.asyncReducers[key] = reducer;

  store.replaceReducer(makeRootReducer(store.asyncReducers, history));
};

export default makeRootReducer;
