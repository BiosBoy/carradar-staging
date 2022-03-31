import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import styles from './index.scss'
import { TLanguages } from '../../interfaces/IStore'

export interface IProps {
  to: string
  children: string | Element | JSX.Element
  navigateSPA: any
  className?: string
  withBackground?: boolean
  type?: 'rounded'
  locale: TLanguages
  isNotSPA?: boolean
}

const Link = ({ isNotSPA, to, children, navigateSPA, className, type, withBackground, locale }: IProps) => {
  const isUALanguage = locale === 'ua'
  const navigationLocale = isUALanguage ? '' : `${locale}`

  const linkTo = `${navigationLocale ? '/' : ''}${navigationLocale}${to}`
  const linkToNormalized = linkTo.replace(/(\/\/\/)/i, '/')

  const handleClick = (e) => {
    if (isNotSPA) {
      return
    }

    e.preventDefault()

    navigateSPA(linkToNormalized)
  }

  const content = typeof children === 'string' ? <span className={styles.text}>{children}</span> : children

  return (
    <a
      href={isNotSPA ? to : linkToNormalized}
      onClick={handleClick}
      className={`${styles.linkSPA} ${type ? styles[type] : ''} ${
        withBackground ? styles.withBackground : ''
      } ${className}`}
    >
      {content}
    </a>
  )
}

const mapDispatchToProps = (state) => ({
  locale: state.app.locale
})

const mapDispatchToState = {
  navigateSPA: push
}

export default connect(mapDispatchToProps, mapDispatchToState)(Link)
