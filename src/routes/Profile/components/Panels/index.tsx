import React from 'react';
import { useDispatch } from 'react-redux';

import AccountSettings from './AccountSettings';
import PasswordSettings from './PasswordSettings';
import HistorySetting from './HistorySettings';

import { saveNewDataAttempt } from '../../modules/actions';

import styles from './index.scss';
import Buttons from './Buttons';

const Panels = ({ activePanel }: { activePanel: string; }) => {
  const dispatch = useDispatch();

  const _handleUpdateProfile = () => {
    dispatch(saveNewDataAttempt());
  };

  return (
    <div className={styles.panelsWrap}>
      {activePanel === 'account' && <AccountSettings />}
      {activePanel === 'password' && <PasswordSettings />}
      {activePanel === 'history' && <HistorySetting />}
      <Buttons activePanel={activePanel} onClick={_handleUpdateProfile} />
    </div>
  );
};

export default Panels;
