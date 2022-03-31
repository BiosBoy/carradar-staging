import React from 'react'
import { useSelector } from 'react-redux'

import styles from './index.scss'

import { IStore } from '../../../../interfaces/IStore'

const HistorySettings = () => {
  const { searchHistory } = useSelector(({ profile }: IStore) => profile)

  const _renderHistoryList = () =>
    searchHistory.map((item, index) => (
      <div key={item.timestamp} className={styles.cell}>
        <label>№ {index + 1}</label>
        <label>Timestamp: {item.timestamp}</label>
        <label>VIN: {item.carData.uid}</label>
      </div>
    ))

  const _renderPlaceholder = (
    <div className={styles.cell}>
      <label>Seems like your History list is empty. Try to search your first car ever!</label>
    </div>
  )

  return (
    <div className={styles.panel}>
      <h4>History Settings</h4>
      <div className={styles.row}>
        {!searchHistory || searchHistory.length === 0 ? _renderPlaceholder : _renderHistoryList()}
      </div>
    </div>
  )
}

export default HistorySettings
