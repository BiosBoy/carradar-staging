import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../../../components/Button';

import getLangPrefix from '../../../utils/gelLangPrefix';

import { acceptCookie } from '../controller/actions';
import { updateStore } from '../controller/helpers/localStorage';

import useLocales from '../hooks/useLocales';
import useFixedBottom from '../../../hooks/useFixedBotton';

import { IStore } from '../../../interfaces/IStore';

import styles from './index.scss';

const CookiePanel = () => {
  const { MAIN_TEXT, TEXT_LINK, TEXT_LABEL } = useLocales();

  useFixedBottom('cookies');

  const { isAccepted } = useSelector(({ cookie }: IStore) => cookie);
  const { locale } = useSelector(({ app }: IStore) => app);
  const dispatch = useDispatch();

  if (isAccepted) {
    return null;
  }

  const _handleCookie = () => {
    updateStore({ storeKey: 'gdpr', storeData: true });
    dispatch(acceptCookie());
  };

  return (
    <div id='cookies' className={styles.cookieWrap}>
      <div className={styles.content}>
        <div className={styles.textWrap}>
          <span className={styles.text}>{MAIN_TEXT}</span>
          <a
            href={`${getLangPrefix(locale)}policy`} className={styles.link}
            target='_self'
          >
            {' '}
            {TEXT_LINK}.
          </a>
        </div>
        <Button
          label={TEXT_LABEL} isActive={true}
          size='S' onClick={_handleCookie}
        />
      </div>
    </div>
  );
};

export default CookiePanel;
