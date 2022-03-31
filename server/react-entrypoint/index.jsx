/* eslint-disable */
// @ts-nocheck
const React = require('react');
const { Helmet } = require('react-helmet');
import Loadable from 'react-loadable';

const appEntry = require('../helpers/appEntry');

const ReactEntrypoint = ({ url = '/', store, history, modules, context }) => {
  const AppUI = require(`../../public/${appEntry()}`)['ui-kit'].default;

  console.log('App SSR Entry START');

  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>My Title</title>
        <link rel='canonical' href='http://mysite.com/example' />
      </Helmet>
      <Loadable.Capture report={(m) => modules.push(m)}>
        <AppUI store={store} history={history} />
      </Loadable.Capture>
    </div>
  );
};

module.exports = ReactEntrypoint;
