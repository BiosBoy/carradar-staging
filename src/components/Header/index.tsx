import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Logo from './Logo';
import Links from './Links';
import Language from './Language';
import Sidebar from '../Sidebar';

import styles from './index.scss';

import isDesktop from '../../utils/isDesktop';

const DesktopMenuLayout = () => {
  return (
    <>
      <Links />
      <Language />
    </>
  );
};

const TouchscreenMenuLayout = () => {
  const [isBurgerClicked, toggleBurger] = useState(false);

  const _handleClose = () => toggleBurger(!isBurgerClicked);

  return (
    <div className={styles.mobileMenu}>
      <Language />
      <button
        type='button'
        className={styles.burgerButton}
        onClick={_handleClose}
        onBlur={_handleClose}
        tabIndex={0}
        aria-label={`Click to ${!isBurgerClicked ? 'open' : 'close'} menu`}
        onKeyDown={undefined}
      >
        {Array.from(Array(4).keys()).map((key) => (
          <span key={key} className={styles.burgerIconSlice} />
        ))}
      </button>
      <Sidebar isOpen={isBurgerClicked} onClickClose={toggleBurger} />
    </div>
  );
};

const Header = () => {
  const isDesktopLayout = useSelector(isDesktop);

  return (
    <div className={`${styles.headerWrap} ${!isDesktopLayout ? styles.sticky : ''}`}>
      <div id='header' className={styles.header}>
        <Logo />
        {isDesktopLayout ? <DesktopMenuLayout /> : <TouchscreenMenuLayout />}
      </div>
    </div>
  );
};

Header.displayName = 'Header';

export default Header;
