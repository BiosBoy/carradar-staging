import React, { useEffect, memo } from 'react';

import Text from '../components/Text';

import useLocales from '../hooks/useLocales';

import styles from './index.scss';

const Privacy = memo(() => {
  const { SECTION_TITLE } = useLocales();

  useEffect(() => {
    // @ts-ignore
    window.prerenderReady = true;
  }, []);

  return (
    <div className={styles.privacyWrap}>
      <h1 className={styles.headline}>{SECTION_TITLE}</h1>
      <Text />
    </div>
  );
});

export default Privacy;
