import React, { useEffect, useState } from 'react'

import scrollTo from '../../utils/smoothScroll'

import styles from './index.scss'

const HEIGHT_TO_HIDE = 200

const ScrollToTop = () => {
  const [isAppear, setAppear] = useState(false)

  useEffect(() => {
    const handleAppear = () => {
      setAppear(window.pageYOffset > HEIGHT_TO_HIDE)
    }

    window.addEventListener('scroll', handleAppear)
    window.addEventListener('resize', handleAppear)

    return () => {
      window.removeEventListener('scroll', handleAppear)
      window.removeEventListener('resize', handleAppear)
    }
  }, [])

  const handleScrollTop = () => {
    scrollTo({ id: 'header', duration: 1000 })
  }

  return (
    <div className={`${styles.scrollToTopWrap} ${isAppear ? styles.btnAppear : ''}`}>
      <button
        className={styles.buttonScrollTop}
        type='button'
        aria-label='scroll to top'
        onClick={() => handleScrollTop()}
      />
    </div>
  )
}

export default ScrollToTop
