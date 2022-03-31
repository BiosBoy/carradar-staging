import React from 'react'
import Loadable from 'react-loadable'

import rootStore from '../../store/createStore'
import { injectReducer } from '../../store/middleware/rootReducer'
import { injectSaga } from '../../store/middleware/rootSaga'

import reducer from './modules/reducers'
import saga from './modules/sagas'

import PreloaderComponent from '../../components/Preloader'

const Preloader = () => <PreloaderComponent />

const Logout = Loadable({
  loader: async () => {
    const LogoutComponent = await import(/* webpackChunkName: "logout" */ './layout')

    injectReducer(rootStore.store, { reducer, key: 'logout' }, rootStore.history)
    injectSaga({ key: 'logout', saga })

    return LogoutComponent
  },
  loading: Preloader,
  modules: ['logout']
})

export default Logout
