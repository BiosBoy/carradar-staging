import React from 'react';
import { useSelector } from 'react-redux';

import { IStore } from '../../../../interfaces/IStore';
import useLocales from '../../hooks/useLocales';

import styles from './index.scss';

const SideBar = ({ activePanel, setActivePanel }: { activePanel: string; setActivePanel: (id: string) => void }) => {
  const { username, usersurname } = useSelector(({ profile }: IStore) => profile);
  const { SIDEBAR } = useLocales();

  const _handleActivePanelClick = ({ target }) => {
    setActivePanel(target.id);
  };

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.imageBlock}>
        <img
          src='https://kiranworkspace.com/demo/projects/code-snippets/dashboard-comp/account-settings/img/user2.jpg'
          className={styles.image}
          alt=''
        />
        <h4 className='text-center'>{`${username} ${usersurname || ''}`}</h4>
      </div>
      <div className={styles.tabs} role='tablist' aria-orientation='vertical'>
        <button
          id='account'
          type='button'
          className={`${styles.button} ${activePanel === 'account' ? styles.active : ''}`}
          onClick={_handleActivePanelClick}
        >
          <i className={`${styles.icon} fa fa-home text-center mr-1`} />
          {SIDEBAR.ACCOUNT_TITLE}
        </button>
        <button
          id='password'
          type='button'
          className={`${styles.button} ${activePanel === 'password' ? styles.active : ''}`}
          onClick={_handleActivePanelClick}
        >
          <i className={`${styles.icon} fa fa-key text-center mr-1`} />
          {SIDEBAR.PASSWORD_TITLE}
        </button>
        <button
          id='history'
          type='button'
          className={`${styles.button} ${activePanel === 'history' ? styles.active : ''}`}
          onClick={_handleActivePanelClick}
        >
          <i className={`${styles.icon} fa fa-history text-center mr-1`} />
          {SIDEBAR.HISTORY_TITLE}
        </button>
      </div>
    </div>
  );
};

export default SideBar;
