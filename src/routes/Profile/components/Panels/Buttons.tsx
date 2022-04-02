import React from 'react';
import { useSelector } from 'react-redux';

import Button from '../../../../components/Button';
import { IStore } from '../../../../interfaces/IStore';
import useLocales from '../../hooks/useLocales';

import styles from './index.scss';

const Buttons = ({ activePanel, onClick }: { activePanel: string; onClick: (e) => void; }) => {
  const { error, isProfileChangeFetch } = useSelector(({ profile }: IStore) => profile);

  const { SUBMIT } = useLocales();

  if (activePanel === 'history') {
    return null;
  }

  return (
    <div className={styles.buttonsWrap}>
      <Button
        isActive={true} isLoading={isProfileChangeFetch}
        disabled={false} onClick={onClick}
        label={SUBMIT}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default Buttons;
