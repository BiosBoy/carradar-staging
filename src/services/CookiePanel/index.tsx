import Loadable from 'react-loadable';

import rootStore from '../../store/createStore';
import reducer from './controller/reducers';

import { injectReducer } from '../../store/middleware/rootReducer';

const Preloader = () => null;

const Login = Loadable({
  loader: async () => {
    const LoginComponent = await import(/* webpackChunkName: "cookie" */ './layout');

    injectReducer(rootStore.store, { key: 'cookie', reducer }, rootStore.history);

    return LoginComponent;
  },
  loading: Preloader,
  modules: ['cookie']
});

export default Login;
