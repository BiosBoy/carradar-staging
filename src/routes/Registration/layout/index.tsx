import React, { useEffect, useRef, memo } from 'react';
import { push } from 'connected-react-router';
import { withRouter } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { GApiProvider } from 'react-gapi-auth2';

import Button from '../../../components/Button';
import GoogleOAthLoginButton from '../../../services/OAth/LoginButton';

import { setRegistrationInput, setSocialRegistrationData, loadRegistrationDataAttempt } from '../modules/actions';
import useLocales from '../hooks/useLocales';
import getLangPrefix from '../../../utils/gelLangPrefix';
import validateEmail from '../../../utils/validateEmail';

import { OATH_CONFIG } from '../../../services/OAth/constants';

import styles from './index.scss';

import { IStore } from '../../../interfaces/IStore';

const Registration = memo(() => {
  const ref = useRef(null);
  const { SECTION_TITLE, FORM } = useLocales();
  const dispatch = useDispatch();
  const { username, email, password, passwordConfirmation, isRegistrationFetch, error } = useSelector(
    ({ registration }: IStore) => registration
  );
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

    dispatch(setRegistrationInput({ id, value }));
  };

  const _handleSubmit = () => {
    dispatch(loadRegistrationDataAttempt());
  };

  const _handleSubmitSocial = (userData) => {
    console.log(userData, 'userData');
    dispatch(setSocialRegistrationData(userData));
  };

  const _handleSubmitKeyDown = (event) => {
    event.code === 'Enter' && _handleSubmit();
  };

  const isFormFilled = username && email && password && passwordConfirmation;
  const isWeakPassword = password && password.length < 8;
  const isPasswordsNotMatch = passwordConfirmation && password !== passwordConfirmation;
  const isInvalidEmail = email && !validateEmail(email);

  return (
    <div className={styles.registrationWrap}>
      <h1 className={styles.headline}>{SECTION_TITLE}</h1>
      <div className={styles.contentWrap}>
        <label htmlFor='username' className={`${styles.text} ${styles.floatLabel}`}>
          {FORM.NAME}
        </label>
        <input
          id='username'
          name='username'
          type='text'
          ref={ref}
          className={styles.input}
          value={username}
          onChange={_handleInput}
          onKeyDown={_handleSubmitKeyDown}
          disabled={isRegistrationFetch}
        />
      </div>
      <div className={styles.contentWrap}>
        <label htmlFor='email' className={`${styles.text} ${styles.floatLabel}`}>
          {FORM.EMAIL}
        </label>
        <input
          id='email'
          name='email'
          type='text'
          className={styles.input}
          value={email}
          onChange={_handleInput}
          onKeyDown={_handleSubmitKeyDown}
          disabled={isRegistrationFetch}
        />
        {isInvalidEmail && <span className={styles.error}>{FORM.EMAIL_TIP}</span>}
      </div>
      <div className={styles.contentWrap}>
        <label htmlFor='password' className={`${styles.text} ${styles.floatLabel}`}>
          {FORM.PASSWORD}
        </label>
        <input
          id='password'
          name='password'
          type='password'
          className={styles.input}
          value={password}
          onChange={_handleInput}
          onKeyDown={_handleSubmitKeyDown}
          disabled={isRegistrationFetch}
        />
        {isWeakPassword && <span className={styles.error}>{FORM.PASSWORD_TIP}</span>}
      </div>
      <div className={styles.contentWrap}>
        <label htmlFor='passwordConfirmation' className={`${styles.text} ${styles.floatLabel}`}>
          {FORM.CONFIRM_PASSWORD}
        </label>
        <input
          id='passwordConfirmation'
          className={styles.input}
          name='passwordConfirmation'
          type='password'
          value={passwordConfirmation}
          onChange={_handleInput}
          onKeyDown={_handleSubmitKeyDown}
          disabled={isRegistrationFetch}
        />
        {isPasswordsNotMatch && <span className={styles.error}>{FORM.PASSWORDS_MATCH}</span>}
      </div>
      <Button
        onClick={_handleSubmit}
        disabled={!isFormFilled}
        isLoading={isRegistrationFetch}
        isActive={!!isFormFilled && !isWeakPassword && !isPasswordsNotMatch}
        label={FORM.SUBMIT}
      />
      {error && <span className={styles.error}>{error}</span>}
      <div className={styles.socialWrap}>
        <span className={styles.label}>Use Social Links to Register:</span>
        <GApiProvider clientConfig={OATH_CONFIG}>
          <GoogleOAthLoginButton callback={_handleSubmitSocial} />
        </GApiProvider>
      </div>
    </div>
  );
});

export default withRouter(Registration);
