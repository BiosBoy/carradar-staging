// @ts-nocheck
import React from 'react';
import { History } from 'history';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Frontload } from 'react-frontload';

import CoreLayout from '../layout';

interface IAppProvider {
  store: any;
  history: History;
}

const AppRouting = ({ store, history }: IAppProvider) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history} basename='en'>
        <Frontload noServerRender={true}>
          <CoreLayout />
        </Frontload>
      </ConnectedRouter>
    </Provider>
  );
};

export default AppRouting;
