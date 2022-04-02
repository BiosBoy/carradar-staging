import React, { memo } from 'react';
import i18n from 'i18next';
import { connect } from 'react-redux';

import Link from '../Link';

import styles from './index.scss';

import { IStore } from '../../interfaces/IStore';

const Links = ({ isLogged, isDesktop }: { isLogged: boolean; isDesktop: boolean }) => {
  const UnloggedLinks = memo(() => (
    <>
      <Link className={styles.link} to='/sign-in'>
        <span className={styles.text}>{i18n.t('header.menu.sign_in')}</span>
      </Link>
      <Link className={styles.link} to='/sign-up'>
        <span className={styles.text}>{i18n.t('header.menu.sign_up')}</span>
      </Link>
    </>
  ));

  const LoggedLinks = memo(() => {
    return (
      <>
        <Link className={styles.link} to='/profile'>
          <span className={styles.text}>{i18n.t('header.menu.profile')}</span>
        </Link>
        <Link className={styles.link} to='/sign-out'>
          <span className={styles.text}>{i18n.t('header.menu.sign_out')}</span>
        </Link>
      </>
    );
  });

  return (
    <div className={styles.navBar}>
      {!isDesktop && (
        <Link className={styles.link} to='/'>
          <span className={styles.text}>{i18n.t('header.menu.home')}</span>
        </Link>
      )}
      <Link className={styles.link} to='/about-us'>
        <span className={styles.text}>{i18n.t('header.menu.about_us')}</span>
      </Link>
      <Link className={styles.link} to='/contact'>
        <span className={styles.text}>{i18n.t('header.menu.contact')}</span>
      </Link>
      {!isLogged ? <UnloggedLinks /> : <LoggedLinks />}
    </div>
  );
};

const mapStateToProps = ({ app, browser }: IStore) => ({
  language: app.locale,
  isLogged: app.isLogged,
  isDesktop: browser.is.desktop
});

export default connect(mapStateToProps, null)(Links);
