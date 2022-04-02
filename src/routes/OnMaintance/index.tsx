import React from 'react';
import Loadable from 'react-loadable';

import PreloaderComponent from '../../components/Preloader';

const Preloader = () => <PreloaderComponent />;

const OnMaintance = Loadable({
  loader: async () => {
    // tslint:disable-next-line:space-in-parens
    const OnMaintanceComponent = await import(/* webpackChunkName: "onmaintance" */ './layout');

    return OnMaintanceComponent;
  },
  loading: Preloader,
  modules: ['onmaintance']
});

export default OnMaintance;
