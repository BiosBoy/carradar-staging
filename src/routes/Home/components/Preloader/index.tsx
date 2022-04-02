import React, { memo } from 'react';

import styles from './index.scss';

const Preloader = memo(() => {
  return <div className={styles.preloader} />;
});

export default Preloader;
