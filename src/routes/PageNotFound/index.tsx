import React from 'react';
import Loadable from 'react-loadable';

import PreloaderComponent from '../../components/Preloader';

const Preloader = () => <PreloaderComponent />;

const PageNotFound = Loadable({
  loader: async () => {
    // tslint:disable-next-line:space-in-parens
    const PageNotFoundComponent = await import(/* webpackChunkName: "pagenotfound" */ './layout');

    return PageNotFoundComponent;
  },
  loading: Preloader,
  modules: ['pagenotfound']
});

export default PageNotFound;
