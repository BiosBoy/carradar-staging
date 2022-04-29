import React, { useEffect, useRef, memo } from 'react';
import { push } from 'connected-react-router';
import { withRouter } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import GoogleOAthLoginButton from '../../../services/OAth/LoginButton';
import Button from '../../../components/Button';

import { setLoginInput, setSocialData, loadLoginDataAttempt } from '../modules/actions';

import useLocales from '../hooks/useLocales';
import getLangPrefix from '../../../utils/gelLangPrefix';

import { IStore } from '../../../interfaces/IStore';

import styles from './index.scss';

const Login = memo(() => {
  const { SECTION_TITLE, EMAIL, PASSWORD, SUBMIT } = useLocales();

  const ref = useRef(null);
  const dispatch = useDispatch();
  const { userdata, password, isLoginFetch, error } = useSelector(({ login }: IStore) => login);
  const { isLogged, locale } = useSelector(({ app }: IStore) => app);

  useEffect(() => {
    // @ts-ignore
    window.prerenderReady = true;

    ref.current.focus();
  }, []);

  useEffect(() => {
    if (isLogged) {
      dispatch(push(`${getLangPrefix(locale)}profile`));
    }
  }, [isLogged]);

  const _handleInput = ({ target }) => {
    const { id, value } = target;

    dispatch(setLoginInput({ id, value }));
  };

  const _handleSubmit = () => {
    dispatch(loadLoginDataAttempt());
  };

  const _handleSocialSubmit = (userData) => {
    dispatch(setSocialData(userData));
  };

  const _handleSubmitKeyDown = (event) => {
    event.code === 'Enter' && _handleSubmit();
  };

  return (
    <div className={styles.loginWrap}>
      <h1 className={styles.headline}>{SECTION_TITLE}</h1>
      <div className={styles.contentWrap}>
        <label htmlFor='userdata' className={`${styles.text} ${styles.floatLabel}`}>
          {EMAIL}
        </label>
        <input
          id='userdata'
          name='userdata'
          type='text'
          ref={ref}
          disabled={isLoginFetch}
          className={styles.input}
          value={userdata}
          onChange={_handleInput}
          onKeyDown={_handleSubmitKeyDown}
        />
      </div>
      <div className={styles.contentWrap}>
        <label htmlFor='password' className={`${styles.text} ${styles.floatLabel}`}>
          {PASSWORD}
        </label>
        <input
          id='password'
          className={styles.input}
          disabled={isLoginFetch}
          name='password'
          type='password'
          value={password}
          onChange={_handleInput}
          onKeyDown={_handleSubmitKeyDown}
        />
      </div>
      <Button
        onClick={_handleSubmit}
        disabled={!password || !userdata}
        isLoading={isLoginFetch}
        isActive={!!(password && userdata)}
        label={SUBMIT}
      />
      {error && <span className={styles.error}>{error}</span>}
      <div className={styles.socialWrap}>
        <span className={styles.label}>Use Social Links to Login:</span>
        <GoogleOAthLoginButton callback={_handleSocialSubmit} />
      </div>
    </div>
  );
});

export default withRouter(Login);
