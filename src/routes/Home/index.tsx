import React from 'react'

import rootStore from '../../store/createStore'
import { injectReducer } from '../../store/middleware/rootReducer'
import { injectSaga } from '../../store/middleware/rootSaga'

import reducer from './modules/reducers'
import saga from './modules/sagas'

// import LoaderSync from '../../helpers/LoaderSync';
import LoaderAsync from '../../helpers/LoaderAsync'

import isServer from '../../utils/isServer'
import Preloader from './components/Preloader'

const Skeleton = () => <Preloader />

const HomeRoute = () => {
  if (!isServer()) {
    injectReducer(rootStore.store, { reducer, key: 'home' }, rootStore.history)
    injectSaga({ key: 'home', saga })
  }

  // const Loader = !__SSR__ ? LoaderAsync : LoaderSync;

  return <LoaderAsync routeName='Home' preloader={Skeleton} />
}

export default HomeRoute
