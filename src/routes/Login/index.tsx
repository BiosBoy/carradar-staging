import React from 'react'
import Loadable from 'react-loadable'

import rootStore from '../../store/createStore'
import { injectReducer } from '../../store/middleware/rootReducer'
import { injectSaga } from '../../store/middleware/rootSaga'

import reducer from './modules/reducers'
import saga from './modules/sagas'

import PreloaderComponent from '../../components/Preloader'

const Preloader = () => <PreloaderComponent />

const Login = Loadable({
  loader: async () => {
    const LoginComponent = await import(/* webpackChunkName: "login" */ './layout')

    injectReducer(rootStore.store, { reducer, key: 'login' }, rootStore.history)
    injectSaga({ key: 'login', saga })

    return LoginComponent
  },
  loading: Preloader,
  modules: ['login']
})

export default Login
