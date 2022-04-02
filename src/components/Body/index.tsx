import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { IStore } from '../../interfaces/IStore';

import styles from './index.scss';

const Body = memo(({ children }: { children: JSX.Element; }) => {
  const { is } = useSelector(({ browser }: IStore) => browser);

  return <div className={`${styles.body} ${!is.desktop ? styles.sticky : ''}`}>{children}</div>;
});

Body.displayName = 'Body';

export default Body;
