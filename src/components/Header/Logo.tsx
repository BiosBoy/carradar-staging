/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import Link from '../Link';

import styles from './index.scss';

const Logo = () => {
  return (
    <div className={styles.logoWrap}>
      <Link to='/'>
        <img className={styles.logo} src='/assets/logo.png' alt='logo' />
      </Link>
    </div>
  );
};

export default Logo;
