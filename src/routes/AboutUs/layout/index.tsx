import React, { useEffect } from 'react'
import { withRouter } from 'react-router'

import useLocales from '../hooks/useLocales'

import styles from './index.scss'

const AboutUs = () => {
  const { SECTION_TITLE, TEXT_FIRST, TEXT_SECOND, TEXT_THIRD, TEXT_FOURTH } = useLocales()

  useEffect(() => {
    // @ts-ignore
    window.prerenderReady = true
  }, [])

  return (
    <div className={styles.aboutUsWrap}>
      <h1 className={styles.headline}>{SECTION_TITLE}</h1>
      <img src='/assets/logo.png' alt='logo' className={styles.companyLogo} />
      <p className={styles.text}>{TEXT_FIRST}</p>
      <br />
      <p className={styles.text}>{TEXT_SECOND}</p>
      <br />
      <p className={styles.text}>{TEXT_THIRD}</p>
      <br />
      <p className={styles.text}>
        {TEXT_FOURTH}{' '}
        <a href='https://carradar.com.ua' target='_self'>
          carradar.com.ua
        </a>
      </p>
    </div>
  )
}

export default withRouter(AboutUs as any)
