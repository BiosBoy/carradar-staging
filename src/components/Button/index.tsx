import React from 'react'

import styles from './index.scss'

export interface IProps {
  size?: 'S' | 'M' | 'L'
  disabled?: boolean
  onClick: (e: any) => void
  label: string
  isActive?: boolean
  isLoading?: boolean
}

const Button = ({ onClick, label, isActive, isLoading, disabled, size }: IProps) => {
  const preloader = (
    <span className={styles.preloader}>
      <span />
      <span />
      <span />
    </span>
  )

  return (
    <button
      type='button'
      disabled={disabled}
      className={`${styles.button} ${isActive ? styles.filled : ''} ${size ? styles[size] : ''}`}
      onClick={onClick}
      aria-label={label}
    >
      {!isLoading ? label : preloader}
    </button>
  )
}

export default Button
