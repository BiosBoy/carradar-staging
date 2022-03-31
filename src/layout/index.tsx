import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { NotifyPopUp, Header, Body, Footer, ScrollToTop } from '../components'
import { Home, PageNotFound, Privacy, AboutUs, Contact, Logout, Login, Registration, Profile } from '../routes'
import { LiveChat, CookiePanel } from '../services'

import getLangPrefix from '../utils/gelLangPrefix'

import { IStore } from '../interfaces/IStore'
// eslint-disable-next-line import/no-unassigned-import
import '../../i18nextConf'

import '../styles/index.scss'
import styles from './index.scss'

export interface IProps {
  language: string
}

const CoreLayout = ({ language }: IProps) => {
  const lang = getLangPrefix(language)

  return (
    <div className={styles.appWrapper}>
      <NotifyPopUp />
      <Header />
      <Body>
        <Switch>
          <Route exact={true} path={lang} component={Home} />
          <Route path={`${lang}contact`} component={Contact} />
          <Route path={`${lang}about-us`} component={AboutUs} />
          <Route path={`${lang}sign-out`} component={Logout} />
          <Route path={`${lang}sign-in`} component={Login} />
          <Route path={`${lang}sign-up`} component={Registration} />
          <Route path={`${lang}profile`} component={Profile} />
          <Route path={`${lang}policy`} component={Privacy} />
          <Route path='*' component={PageNotFound} />
        </Switch>
      </Body>
      <Footer />
      <LiveChat />
      <ScrollToTop />
      <CookiePanel />
    </div>
  )
}

// console.log(document, 'document');

// const SSR_ROOT = document && document.querySelector('#react-ssr-app-root');

// const CoreLayoutSSR = (props) => {
//   Loadable.preloadReady().then((payload) => {
//     console.log(props, payload, window.__PRELOADED_STATE__, 'test')
//     ReactDOM.hydrate(<CoreLayout />, SSR_ROOT);
//   });
// };

// const CoreLayoutCSR = () => <CoreLayout />;

// SSR_ROOT && CoreLayoutSSR();

const mapStateToProps = (state: IStore) => ({
  language: state.app.locale
})

export default connect(mapStateToProps, null)(CoreLayout)
