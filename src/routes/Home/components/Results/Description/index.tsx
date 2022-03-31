import React from 'react'

import { ICarMainData } from '../../../interfaces/IStore'

import useLocales from '../hooks/useLocales'

import styles from './index.scss'

const Description = ({ mainData }: { mainData: ICarMainData }) => {
  const { OWNER_LABEL, VIN_LABEL, BLACKLISTED_LABEL, INFO_LABEL } = useLocales()

  if (!mainData) {
    return null
  }

  const topSection = () => {
    return (
      <div className={styles.topSection}>
        <div className={styles.headLine}>
          <i className={`${styles.iconLogo} car-${mainData.brand.toLocaleLowerCase()}`} />
          <span className={styles.title}>{`${mainData.brand} ${mainData.model}`}</span>
        </div>
        <div className={styles.number}>
          <div className={styles.sign}>
            <span className={styles.text}>UA</span>
          </div>
          <div className={styles.roadNumber}>
            <span className={styles.text}>{mainData.number}</span>
          </div>
        </div>
      </div>
    )
  }

  const bottomSection = () => {
    return (
      <div className={styles.bottomSection}>
        <div className={styles.infoList}>
          <div className={styles.info}>
            <span className={styles.title}>{OWNER_LABEL}: </span>
            <span className={styles.text}>unknown</span>
          </div>
          <div className={styles.info}>
            <span className={styles.title}>{VIN_LABEL}: </span>
            <span className={styles.text}>{mainData.vinCode}</span>
          </div>
          <div className={styles.info}>
            <span className={styles.title}>{BLACKLISTED_LABEL}: </span>
            <span className={styles.text}>unknown</span>
          </div>
          <div className={styles.info}>
            <span className={styles.title}>{INFO_LABEL}: </span>
            <span className={styles.text}>{mainData.info}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.description}>
      {topSection()}
      {bottomSection()}
    </div>
  )
}

export default Description
