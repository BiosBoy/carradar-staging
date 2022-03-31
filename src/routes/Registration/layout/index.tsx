import React, { useEffect, useRef } from 'react'
import { push } from 'connected-react-router'
import { withRouter } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'

import Button from '../../../components/Button'

import { setRegistrationInput, loadRegistrationDataAttempt } from '../modules/actions'
import useLocales from '../hooks/useLocales'
import getLangPrefix from '../../../utils/gelLangPrefix'

import styles from './index.scss'

import { IStore } from '../../../interfaces/IStore'

const Registration = () => {
  const ref = useRef(null)
  const { SECTION_TITLE } = useLocales()
  const dispatch = useDispatch()
  const { username, email, password, passwordConfirmation, isRegistrationFetch, error } = useSelector(
    ({ registration }: IStore) => registration
  )
  const { isLogged, locale } = useSelector(({ app }: IStore) => app)

  useEffect(() => {
    // @ts-ignore
    window.prerenderReady = true

    ref.current.focus()
  }, [])

  useEffect(() => {
    if (isLogged) {
      dispatch(push(`${getLangPrefix(locale)}profile`))
    }
  }, [isLogged])

  const _handleInput = ({ target }) => {
    const { id, value } = target

    dispatch(setRegistrationInput({ id, value }))
  }

  const _handleSubmit = () => {
    dispatch(loadRegistrationDataAttempt())
  }

  const _handleSubmitKeyDown = (event) => {
    event.code === 'Enter' && _handleSubmit()
  }

  const isFormFilled = username && email && password && passwordConfirmation

  return (
    <div className={styles.registrationWrap}>
      <h1 className={styles.headline}>{SECTION_TITLE}</h1>
      <div className={styles.contentWrap}>
        <label htmlFor='username' className={`${styles.text} ${styles.floatLabel}`}>
          User Name
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
        />
      </div>
      <div className={styles.contentWrap}>
        <label htmlFor='email' className={`${styles.text} ${styles.floatLabel}`}>
          Email
        </label>
        <input
          id='email'
          name='email'
          type='text'
          className={styles.input}
          value={email}
          onChange={_handleInput}
          onKeyDown={_handleSubmitKeyDown}
        />
      </div>
      <div className={styles.contentWrap}>
        <label htmlFor='password' className={`${styles.text} ${styles.floatLabel}`}>
          Password
        </label>
        <input
          id='password'
          name='password'
          type='password'
          className={styles.input}
          value={password}
          onChange={_handleInput}
          onKeyDown={_handleSubmitKeyDown}
        />
        <span>Enter a password longer than 8 characters</span>
      </div>
      <div className={styles.contentWrap}>
        <label htmlFor='passwordConfirmation' className={`${styles.text} ${styles.floatLabel}`}>
          Confirm Password
        </label>
        <input
          id='passwordConfirmation'
          className={styles.input}
          name='passwordConfirmation'
          type='password'
          value={passwordConfirmation}
          onChange={_handleInput}
          onKeyDown={_handleSubmitKeyDown}
        />
        <span>Your passwords do not match</span>
      </div>
      <Button
        onClick={_handleSubmit}
        disabled={!isFormFilled}
        isLoading={isRegistrationFetch}
        isActive={!!isFormFilled}
        label='Submit'
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}

export default withRouter(Registration)
