/* eslint-disable max-statements */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import i18next from 'i18next';
import { setLocale } from '../../controller/actions';
import changeMetaData from '../../utils/changeMetaData';

import styles from './index.scss';

import { BUTTONS_LANGUAGES } from './constants';
import { TLanguages } from '../../interfaces/IStore';
import { LOCALES_ADAPTER } from '../../constants/locals';
import langPathChanger from '../../controller/helpers/langPathChanges';

const Language = () => {
  const dispatch = useDispatch();

  const [isOpen, toggleDropDown] = useState(false);
  const [currentLocale, setLanguage] = useState(null);

  const pathRewriter = (newPath: string) => {
    const linkTo = newPath[0] === '/' ? newPath : `/${newPath}`;

    const newLocale = newPath.substr(0, 2);

    dispatch(push(linkTo));
    dispatch(setLocale(['en', 'ru', 'ua'].includes(newLocale) ? (newLocale as TLanguages) : ('/' as TLanguages)));
    changeMetaData();
  };

  useEffect(() => {
    const selectedLangLabel = LOCALES_ADAPTER[window.navigator.language] || LOCALES_ADAPTER.en;

    setLanguage({
      label: selectedLangLabel,
      icon: BUTTONS_LANGUAGES.find(({ label }) => label === selectedLangLabel).icon
    });

    i18next.changeLanguage(selectedLangLabel);
    langPathChanger({ label: selectedLangLabel, callback: pathRewriter });
  }, []);

  const handleLanguageDropDown = (type?: string) => toggleDropDown(type === 'close' ? false : !isOpen);

  // FIXME: make this part of the code less complex!
  const handleLanguageSet = ({ target }) => {
    if (!isOpen) {
      return;
    }

    i18next.changeLanguage(target.dataset.label);
    handleLanguageDropDown('close');

    setLanguage({
      label: target.dataset.label,
      icon: target.dataset.icon
    });

    langPathChanger({ label: target.dataset.label, callback: pathRewriter });
  };

  const renderButton = (btnProps = {}) => {
    // @ts-ignore
    const { label, icon } = btnProps || {};

    if (!label || !icon) {
      return null;
    }

    return (
      <button
        key={label}
        type='button'
        data-label={label}
        data-icon={icon}
        aria-label={label}
        className={`${styles.flag} ${styles[icon]}`}
        onMouseDown={(e) => handleLanguageSet(e)}
      />
    );
  };

  const selectedOption = renderButton(currentLocale);

  const optionsAvailable = BUTTONS_LANGUAGES.map(({ label, icon }) => {
    if (!isOpen || !label || label === currentLocale.label) {
      return null;
    }

    return renderButton({ label, icon });
  });

  return (
    <div className={styles.langContainer}>
      <div
        role='button'
        tabIndex={0}
        arial-label='Select Language'
        className={`${styles.language} ${isOpen ? styles.isOpen : ''}`}
        onClick={() => handleLanguageDropDown()}
        onBlur={() => handleLanguageDropDown('close')}
        onKeyDown={undefined}
      >
        {selectedOption}
        {optionsAvailable}
      </div>
    </div>
  );
};

export default Language;
