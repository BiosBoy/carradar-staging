import React, { useEffect, memo } from 'react';
import { push } from 'connected-react-router';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';

import Button from '../../../components/Button';
import Preloader from '../../../components/Preloader';

import { loadLogoutDataAttempt, setManualLogout } from '../modules/actions';

import useLocales from '../hooks/useLocales';
import getLangPrefix from '../../../utils/gelLangPrefix';

import { IStore } from '../../../interfaces/IStore';

import styles from './index.scss';

const Logout = memo(() => {
  const dispatch = useDispatch();
  const { isManualReload, isLogoutFetch } = useSelector(({ logout }: IStore) => logout);
  const { isLogged, locale } = useSelector(({ app }: IStore) => app);

  useEffect(() => {
    dispatch(loadLogoutDataAttempt());
  }, [dispatch]);

  useEffect(() => {
    if (!isLogged && !isManualReload) {
      dispatch(push(getLangPrefix(locale)));
    }
  }, [dispatch, locale, isLogged, isManualReload]);

  const _handleManualLogout = () => {
    dispatch(setManualLogout(false));
    dispatch(push(getLangPrefix(locale)));
  };

  const { SECTION_TITLE, SUBMIT, TEXT } = useLocales();

  if (isLogoutFetch) {
    return <Preloader />;
  }

  return (
    <div className={styles.logoutWrap}>
      <h1 className={styles.headline}>{SECTION_TITLE}</h1>
      <p className={styles.text}>{TEXT}!</p>
      <Button
        label={SUBMIT} isLoading={false}
        disabled={false} isActive={true}
        onClick={_handleManualLogout}
      />
    </div>
  );
});

export default withRouter(Logout);
