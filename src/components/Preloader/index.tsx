import React from 'react';

import styles from './index.scss';

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <img
        className={styles.logo} src='/assets/logo.png'
        alt='logo'
      />
      <div className={styles.preloaderItem}>
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Preloader;
