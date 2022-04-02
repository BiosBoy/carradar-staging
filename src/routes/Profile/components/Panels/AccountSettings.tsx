/* eslint-disable max-len */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IStore } from '../../../../interfaces/IStore';
import useLocales from '../../hooks/useLocales';
import { changeProfileData } from '../../modules/actions';

import styles from './index.scss';

const AccountSettings = () => {
  const { username, usersurname, email, mobile, bio, isProfileChangeFetch } = useSelector(
    ({ profile }: IStore) => profile
  );
  const { ACCOUNT } = useLocales();

  const dispatch = useDispatch();

  const _handleChange = ({ target }) => {
    dispatch(changeProfileData(target.id, target.value));
  };

  return (
    <div className={styles.panel}>
      <h4>{ACCOUNT.SUB_TITLE}</h4>
      <div className={styles.row}>
        <div className={styles.cell}>
          <label>{ACCOUNT.FIRST_NAME}</label>
          <input
            id='username'
            type='text'
            disabled={isProfileChangeFetch}
            className={styles.input}
            value={username}
            onChange={_handleChange}
          />
        </div>
        <div className={styles.cell}>
          <label>{ACCOUNT.LAST_NAME}</label>
          <input
            id='usersurname'
            type='text'
            disabled={isProfileChangeFetch}
            className={styles.input}
            value={usersurname || 'N/A'}
            onChange={_handleChange}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.cell}>
          <label>{ACCOUNT.EMAIL}</label>
          <input
            id='email'
            type='text'
            disabled={isProfileChangeFetch}
            className={styles.input}
            value={email}
            onChange={_handleChange}
          />
        </div>
        <div className={styles.cell}>
          <label>{ACCOUNT.MOBILE}</label>
          <input
            id='mobile'
            type='text'
            disabled={isProfileChangeFetch}
            className={styles.input}
            value={mobile || 'N/A'}
            onChange={_handleChange}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.cell} ${styles.textAreaWrap}`}>
          <label>{ACCOUNT.BIO}</label>
          <textarea
            id='bio'
            disabled={isProfileChangeFetch}
            className={styles.textArea}
            onChange={_handleChange}
            value={
              bio
              || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vero enim error similique quia numquam ullam corporis officia odio repellendus aperiam consequatur laudantium porro voluptatibus, itaque laboriosam veritatis voluptatum distinctio!'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
