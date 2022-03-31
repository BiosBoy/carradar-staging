import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IStore } from '../../../../interfaces/IStore'
import { changeProfileData } from '../../modules/actions'

import styles from './index.scss'

const AccountSettings = () => {
  const { username, usersurname, email, mobile, bio } = useSelector(({ profile }: IStore) => profile)

  const dispatch = useDispatch()

  const _handleChange = ({ target }) => {
    console.log(changeProfileData, target.id, target.value)
    dispatch(changeProfileData(target.id, target.value))
  }

  return (
    <div className={styles.panel}>
      <h4>Account Settings</h4>
      <div className={styles.row}>
        <div className={styles.cell}>
          <label>First Name</label>
          <input id='username' type='text' className={styles.input} value={username} onChange={_handleChange} />
        </div>
        <div className={styles.cell}>
          <label>Last Name</label>
          <input
            id='usersurname'
            type='text'
            className={styles.input}
            value={usersurname || 'N/A'}
            onChange={_handleChange}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.cell}>
          <label>Email</label>
          <input id='email' type='text' className={styles.input} value={email} onChange={_handleChange} />
        </div>
        <div className={styles.cell}>
          <label>Phone number</label>
          <input id='mobile' type='text' className={styles.input} value={mobile || 'N/A'} onChange={_handleChange} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.cell} ${styles.textAreaWrap}`}>
          <label>Bio</label>
          <textarea
            id='bio'
            className={styles.textArea}
            onChange={_handleChange}
            value={
              bio ||
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vero enim error similique quia numquam ullam corporis officia odio repellendus aperiam consequatur laudantium porro voluptatibus, itaque laboriosam veritatis voluptatum distinctio!'
            }
          />
        </div>
      </div>
    </div>
  )
}

export default AccountSettings
