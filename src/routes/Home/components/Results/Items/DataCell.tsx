import React from 'react'

import styles from '../index.scss'

import { toMoney } from '../../../../../utils/toMoney'

export interface IProps {
  icon: string
  title: string
  data: string
}

const DataCell = ({ icon, title, data }: IProps) => {
  let currentData = data

  if (icon === 'price') {
    currentData = toMoney({ value: Number(data), currency: 'USD' })
  }

  return (
    <div key={icon} className={styles.cell}>
      <i className={`${styles.icon} ${styles[icon]}`} />
      <div className={styles.infoBlock}>
        <span className={styles.title}>{title}</span>
        <span className={styles.text}>{currentData}</span>
      </div>
    </div>
  )
}

export default DataCell
