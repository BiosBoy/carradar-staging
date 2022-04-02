/* eslint-disable */
import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import i18n from 'i18next';
import classNames from 'classnames';

import LoadIndicator from '../LoadIndicator';

import keyDownHandler, { KEY_TYPES } from '../../utils/keyDownHandler';

import { newsletterSubscriptionAttempt } from '../../controller/actions';

import styles from './index.scss';
import { IStore } from '../../interfaces/IStore';

export interface IProps {
  userEmail: string;
  isSubscribeNewsletterInProgress: boolean;
  subscribeNewsletterAttempt: (email: string) => void;
}

const INVALID_EMAIL_ERROR = 'Email should be valid (e.g. xxx@xxx.xxx)';
const EMPTY_EMAIL = 'Email should not be empty';
const ALREADY_SUBSCRIBED = 'Email already subscribed';

const SubscribeEmail = memo(({ userEmail, subscribeNewsletterAttempt, isSubscribeNewsletterInProgress }: IProps) => {
  const [inputValue, setValue] = useState('');
  const [isInvalidEmail, setInvalidEmailError] = useState(false);
  const [isEmptyEmail, setEmptyEmailError] = useState(false);
  const [isAlreadySubscribed, setAlreadySubscribedEmailError] = useState(false);

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handleInvalidEmail = (status: boolean) => {
    setInvalidEmailError(status);
  };

  const handleEmptyEmail = (status: boolean) => {
    setEmptyEmailError(status);
  };

  const handleAlreadySubscribedEmail = (status: boolean) => {
    setAlreadySubscribedEmailError(status);
  };

  const handleClear = () => {
    setValue('');
  };

  const handleSave = () => {
    const isEmailValid =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
        inputValue
      );

    if (!inputValue || inputValue.length === 0) {
      handleEmptyEmail(true);
      handleInvalidEmail(false);

      return;
    }

    if (!isEmailValid) {
      handleEmptyEmail(false);
      handleInvalidEmail(true);

      return;
    }

    if (userEmail === inputValue) {
      handleAlreadySubscribedEmail(true);
      handleEmptyEmail(false);
      handleInvalidEmail(false);

      return;
    }

    if (!inputValue || isSubscribeNewsletterInProgress) {
      return;
    }

    subscribeNewsletterAttempt(inputValue);
  };

  const handleKeyDownChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    keyDownHandler({
      event: e,
      keysConfig: [
        {
          type: KEY_TYPES.esc,
          onEvent: handleClear
        },
        {
          type: KEY_TYPES.enter,
          onEvent: handleSave
        }
      ]
    });
  };

  const handleClickBlur = () => {
    handleEmptyEmail(false);
    handleInvalidEmail(false);
    handleAlreadySubscribedEmail(false);
  };

  const btnClasses = classNames({
    [styles.emailSendButton]: true,
    [styles.emailFilled]: inputValue || !isSubscribeNewsletterInProgress
  });

  const renderEmailError = () => {
    let errorMessage = null;

    if (isEmptyEmail) {
      errorMessage = EMPTY_EMAIL;
    }

    if (isInvalidEmail) {
      errorMessage = INVALID_EMAIL_ERROR;
    }

    if (isAlreadySubscribed) {
      errorMessage = ALREADY_SUBSCRIBED;
    }

    return (
      (isInvalidEmail || isEmptyEmail || isAlreadySubscribed) && (
        <span className={styles.emailError}>{errorMessage}</span>
      )
    );
  };

  return (
    <>
      <span className={styles.title}>{i18n.t('footer.blocks.third_block.title')}</span>
      <div className={styles.newsletter}>
        <input
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => handleKeyDownChange(e)}
          id='newsletterInput'
          type='email'
          name='email'
          className={styles.input}
          value={inputValue}
          placeholder='E-mail'
        />
        {renderEmailError()}
        <label htmlFor='newsletterInput' className={styles.labelInput} />
        <button
          onClick={() => handleSave()}
          onBlur={() => handleClickBlur()}
          type='button'
          className={btnClasses}
          disabled={isSubscribeNewsletterInProgress}
        >
          {isSubscribeNewsletterInProgress ? (
            <LoadIndicator color='white' type='flat' />
          ) : (
            i18n.t('footer.blocks.third_block.content.button')
          )}
        </button>
      </div>
    </>
  );
});

SubscribeEmail.displayName = 'SubscribeEmail';

const mapStateToProps = (state: IStore) => ({
  isSubscribeNewsletterInProgress: state.app?.subscribeNewsletter?.isInProgress,
  userEmail: state.app?.subscribeNewsletter?.userEmail,
  locale: state.app?.locale
});

const mapDispatchToState = {
  subscribeNewsletterAttempt: newsletterSubscriptionAttempt
};

export default connect(mapStateToProps, mapDispatchToState)(SubscribeEmail);
