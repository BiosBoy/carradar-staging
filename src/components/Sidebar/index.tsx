/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { CSSTransition } from 'react-transition-group';

import Links from '../Header/Links';

import useGlobalClose from './hooks/useGlobalClose';

import styles from './index.module.scss';

export interface IProps {
  isOpen: boolean;
  onClickClose: (status?: boolean) => void;
}

const ANIM_SPEED = 400;

const Sidebar = ({ onClickClose, isOpen }: IProps) => {
  useGlobalClose(isOpen, onClickClose);

  const _handleClose = () => {
    onClickClose(false);
  };

  return (
    <CSSTransition
      in={isOpen} classNames='sidebar'
      timeout={ANIM_SPEED} unmountOnExit
    >
      <div id='sidebarBlock' className={styles.sidebarBlock}>
        <div id='sidebar' className={styles.sidebarWrap}>
          <div className={styles.topSection}>
            <button
              aria-label='close' type='button'
              onClick={_handleClose} className={styles.closeBtn}
            >
              <i className='fa fa-arrow-right' />
            </button>
          </div>
          <div className={styles.mainSection}>
            <Links />
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Sidebar;
