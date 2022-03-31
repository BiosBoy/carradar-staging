// @ts-nocheck

import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { responsiveStoreEnhancer } from 'redux-responsive'

import history from './history'

import logger from './helpers/reduxLogger'
import activeStoreHMR from './helpers/storeHMR'

import sagaMiddleware, { runSaga, rootSaga } from './middleware/rootSaga'
import rootReducer from './middleware/rootReducer'

import isServer from '../utils/isServer'
import socketMiddleware from './middleware/rootWebsockets'

// creating the root store config
const rootStore = (url?: string) => {
  const historyInit = history(url)

  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [routerMiddleware(historyInit), sagaMiddleware, logger]
  const enhancers = []

  if (typeof WebSocket !== 'undefined') {
    middleware.push(socketMiddleware)
  }

  // allow to use the redux browser plugin
  // if (true && window?.__REDUX_DEVTOOLS_EXTENSION__ && !isServer()) {
  //   enhancers.push(window?.__REDUX_DEVTOOLS_EXTENSION__());
  // }

  const initialState = !isServer() && (window as any)?.__PRELOADED_STATE__ ? (window as any)?.__PRELOADED_STATE__ : {}

  // ======================================================
  // Store Instantiation
  // ======================================================
  const store = createStore(
    rootReducer(null, historyInit),
    initialState,
    compose(responsiveStoreEnhancer, applyMiddleware(...middleware), ...enhancers)
  )

  ;(store as any).asyncReducers = {}

  runSaga(rootSaga)
  activeStoreHMR(store as any)

  return {
    store,
    history: historyInit
  }
}

export default rootStore()
