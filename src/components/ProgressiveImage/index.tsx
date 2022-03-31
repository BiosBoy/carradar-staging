import React, { memo, useState, useCallback } from 'react'
import LoadIndicator from '../LoadIndicator'

import styles from './index.scss'
import { IProps } from './interfaces'

const ProgressiveImage = (props: IProps) => {
  const { image, preloader } = props
  const { path = '', alt, customClass } = image
  const { color = 'green', type = 'circle' } = preloader || {}

  const [imageLoadStatus, setImageLoadStatus] = useState('')

  const handlerLoaded = useCallback(() => setImageLoadStatus('loaded'), [])

  const imageToRender = (
    <img
      alt={alt}
      src={path}
      className={`${styles.progressiveImage} ${customClass}`}
      onLoad={handlerLoaded}
      style={!imageLoadStatus ? { display: 'none' } : {}}
    />
  )

  const spinner = (
    <div className={customClass}>
      <LoadIndicator color={color} type={type} />
    </div>
  )

  if (!imageLoadStatus && spinner) {
    return (
      <div className={styles.progressiveImagePreloader}>
        {imageToRender}
        {spinner}
      </div>
    )
  }

  return imageToRender
}

export default memo(ProgressiveImage)
