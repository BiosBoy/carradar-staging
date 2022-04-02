import React, { memo } from 'react';

import styles from './index.scss';

const MockOverlay = memo(({ isMock }: { isMock: boolean; }) => {
  if (!isMock) {
    return null;
  }

  return <div className={styles.mockWrap} />;
});

export default MockOverlay;
