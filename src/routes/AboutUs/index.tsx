import React from 'react';
import Loadable from 'react-loadable';

import PreloaderComponent from '../../components/Preloader';

const Preloader = () => <PreloaderComponent />;

const AboutUs = Loadable({
  loader: async () => {
    // tslint:disable-next-line:space-in-parens
    const AboutUsComponent = await import(/* webpackChunkName: "aboutus" */ './layout');

    return AboutUsComponent;
  },
  loading: Preloader,
  modules: ['aboutus']
});

export default AboutUs;
