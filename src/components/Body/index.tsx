import React, { memo } from 'react'
import styles from './index.scss'

const Body = memo(({ children }: any) => {
  return <div className={styles.body}>{children}</div>
})

Body.displayName = 'Body'

export default Body
