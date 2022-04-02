import React from 'react';
import Loadable from 'react-loadable';

import PreloaderComponent from '../../components/Preloader';

const Preloader = () => <PreloaderComponent />;

const Contact = Loadable({
  loader: async () => {
    // tslint:disable-next-line:space-in-parens
    const ContactComponent = await import(/* webpackChunkName: "contact" */ './layout');

    return ContactComponent;
  },
  loading: Preloader,
  modules: ['contact']
});

export default Contact;
