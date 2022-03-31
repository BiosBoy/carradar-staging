import React, { useEffect, useRef } from 'react'
import { push } from 'connected-react-router'
import { withRouter } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'

import Button from '../../../components/Button'

import { setLoginInput, loadLoginDataAttempt } from '../modules/actions'

import useLocales from '../hooks/useLocales'
import getLangPrefix from '../../../utils/gelLangPrefix'

import { IStore } from '../../../interfaces/IStore'

import styles from './index.scss'

const Login = () => {
  const { SECTION_TITLE } = useLocales()

  const ref = useRef(null)
  const dispatch = useDispatch()
  const { userdata, password, isLoginFetch, error } = useSelector(({ login }: IStore) => login)
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

    dispatch(setLoginInput({ id, value }))
  }

  const _handleSubmit = () => {
    dispatch(loadLoginDataAttempt())
  }

  const _handleSubmitKeyDown = (event) => {
    event.code === 'Enter' && _handleSubmit()
  }

  return (
    <div className={styles.loginWrap}>
      <h1 className={styles.headline}>{SECTION_TITLE}</h1>
      <div className={styles.contentWrap}>
        <label htmlFor='userdata' className={`${styles.text} ${styles.floatLabel}`}>
          Email or User Name
        </label>
        <input
          id='userdata'
          name='userdata'
          type='text'
          ref={ref}
          className={styles.input}
          value={userdata}
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
          className={styles.input}
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
        label='Submit'
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}

export default withRouter(Login)
