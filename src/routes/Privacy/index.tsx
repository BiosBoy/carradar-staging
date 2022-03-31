import React from 'react'
import Loadable from 'react-loadable'

import PreloaderComponent from '../../components/Preloader'

const Preloader = () => <PreloaderComponent />

const Privacy = Loadable({
  loader: async () => {
    // tslint:disable-next-line:space-in-parens
    const PrivacyComponent = await import(/* webpackChunkName: "privacy" */ './layout')

    return PrivacyComponent
  },
  loading: Preloader,
  modules: ['privacy']
})

export default Privacy
