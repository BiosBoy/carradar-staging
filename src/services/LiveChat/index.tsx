import React from 'react';
import Loadable from 'react-loadable';

import rootStore from '../../store/createStore';
import reducer from './controller/reducers';
import saga from './controller/saga';
import injectWebsockets from './controller/websockets';

import { injectReducer } from '../../store/middleware/rootReducer';
import { injectSaga } from '../../store/middleware/rootSaga';

import PreloaderComponent from '../../components/Preloader';

const Preloader = () => <PreloaderComponent />;

const Login = Loadable({
  loader: async () => {
    const LoginComponent = await import(/* webpackChunkName: "chat" */ './layout');

    injectReducer(rootStore.store, { key: 'chat', reducer }, rootStore.history);
    injectSaga({ key: 'chat', saga });
    injectWebsockets(rootStore.store.dispatch);

    return LoginComponent;
  },
  loading: Preloader,
  modules: ['chat']
});

export default Login;
