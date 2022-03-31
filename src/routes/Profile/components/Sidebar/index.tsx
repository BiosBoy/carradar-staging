import React from 'react'
import { useSelector } from 'react-redux'

import { IStore } from '../../../../interfaces/IStore'

import styles from './index.scss'

const SideBar = ({ activePanel, setActivePanel }: any) => {
  const { username, usersurname } = useSelector(({ profile }: IStore) => profile)

  const _handleActivePanelClick = ({ target }) => {
    setActivePanel(target.id)
  }

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
          Account
        </button>
        <button
          id='password'
          type='button'
          className={`${styles.button} ${activePanel === 'password' ? styles.active : ''}`}
          onClick={_handleActivePanelClick}
        >
          <i className={`${styles.icon} fa fa-key text-center mr-1`} />
          Password
        </button>
        <button
          id='history'
          type='button'
          className={`${styles.button} ${activePanel === 'history' ? styles.active : ''}`}
          onClick={_handleActivePanelClick}
        >
          <i className={`${styles.icon} fa fa-history text-center mr-1`} />
          History
        </button>
      </div>
    </div>
  )
}

export default SideBar
