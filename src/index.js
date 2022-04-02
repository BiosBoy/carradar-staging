/* eslint-disable import/no-import-module-exports */
import React from 'react';
import ReactDOM from 'react-dom';

import storeData from './store/createStore';
import AppProvider from './provider/index';

const ENTRY_POINT = document.querySelector('#react-app-root');

// creating starting endpoint for app.
const render = () => {
  ReactDOM.render(<AppProvider store={storeData.store} history={storeData.history} />, ENTRY_POINT);
};

if (__DEV__) {
  // ========================================================
  // DEVELOPMENT STAGE! HOT MODULE REPLACE ACTIVATION!
  // ========================================================
  const devRender = () => {
    if (module.hot) {
      module.hot.accept('./provider/index', () => render());
    }

    render();
  };

  // Wrap render in try/catch
  try {
    devRender();
  } catch (error) {
    console.error(error);
  }
} else {
  // ========================================================
  // PRODUCTION GO!
  // ========================================================
  render();
}
