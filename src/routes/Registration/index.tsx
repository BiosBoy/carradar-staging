import React from 'react';
import Loadable from 'react-loadable';

import rootStore from '../../store/createStore';
import { injectReducer } from '../../store/middleware/rootReducer';
import { injectSaga } from '../../store/middleware/rootSaga';

import reducer from './modules/reducers';
import saga from './modules/sagas';

import PreloaderComponent from '../../components/Preloader';

const Preloader = () => <PreloaderComponent />;

const Registration = Loadable({
  loader: async () => {
    const RegistrationComponent = await import(/* webpackChunkName: "registration" */ './layout');

    injectReducer(rootStore.store, { reducer, key: 'registration' }, rootStore.history);
    injectSaga({ key: 'registration', saga });

    return RegistrationComponent;
  },
  loading: Preloader,
  modules: ['registration']
});

export default Registration;
