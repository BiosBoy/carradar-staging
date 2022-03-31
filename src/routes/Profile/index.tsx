import React from 'react'
import Loadable from 'react-loadable'

import rootStore from '../../store/createStore'
import { injectReducer } from '../../store/middleware/rootReducer'
import { injectSaga } from '../../store/middleware/rootSaga'

import reducer from './modules/reducers'
import saga from './modules/sagas'

import PreloaderComponent from '../../components/Preloader'

const Preloader = () => <PreloaderComponent />

const Profile = Loadable({
  loader: async () => {
    const ProfileComponent = await import(/* webpackChunkName: "profile" */ './layout')

    injectReducer(rootStore.store, { reducer, key: 'profile' }, rootStore.history)
    injectSaga({ key: 'profile', saga })

    return ProfileComponent
  },
  loading: Preloader,
  modules: ['profile']
})

export default Profile
