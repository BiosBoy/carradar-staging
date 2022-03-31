import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { changeProfileData } from '../../modules/actions'

import styles from './index.scss'

import { IStore } from '../../../../interfaces/IStore'

const PasswordSettings = () => {
  const { password, newPassword, newPasswordConfirm } = useSelector(({ profile }: IStore) => profile)

  const dispatch = useDispatch()

  const _handleChange = ({ target }) => {
    dispatch(changeProfileData(target.id, target.value))
  }

  return (
    <div className={styles.panel}>
      <h4>Password Settings</h4>
      <div className={styles.row}>
        <div className={styles.cell}>
          <label>Old Passport</label>
          <input id='password' type='password' className={styles.input} value={password} onChange={_handleChange} />
        </div>
        <div className={styles.cell}>
          <label>New Password</label>
          <input
            id='newPassword'
            type='password'
            className={styles.input}
            value={newPassword}
            onChange={_handleChange}
          />
        </div>
      </div>
      <div className={`${styles.row} ${styles.newPasswordConfirmRow}`}>
        <div className={styles.cell}>
          <label>New Password</label>
          <input
            id='newPasswordConfirm'
            type='password'
            className={styles.input}
            value={newPasswordConfirm}
            onChange={_handleChange}
          />
        </div>
      </div>
    </div>
  )
}

export default PasswordSettings
