import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeProfileData } from '../../modules/actions';

import styles from './index.scss';

import { IStore } from '../../../../interfaces/IStore';
import useLocales from '../../hooks/useLocales';

const PasswordSettings = () => {
  const { password, newPassword, newPasswordConfirm, isProfileChangeFetch } = useSelector(
    ({ profile }: IStore) => profile
  );
  const { PASSWORD } = useLocales();

  const dispatch = useDispatch();

  const _handleChange = ({ target }) => {
    dispatch(changeProfileData(target.id, target.value));
  };

  return (
    <div className={styles.panel}>
      <h4>{PASSWORD.SUB_TITLE}</h4>
      <div className={styles.row}>
        <div className={styles.cell}>
          <label>{PASSWORD.OLD_PASSWORD}</label>
          <input
            id='password'
            type='password'
            disabled={isProfileChangeFetch}
            className={styles.input}
            value={password}
            onChange={_handleChange}
          />
        </div>
        <div className={styles.cell}>
          <label>{PASSWORD.NEW_PASSWORD}</label>
          <input
            id='newPassword'
            type='password'
            disabled={isProfileChangeFetch}
            className={styles.input}
            value={newPassword}
            onChange={_handleChange}
          />
        </div>
      </div>
      <div className={`${styles.row} ${styles.newPasswordConfirmRow}`}>
        <div className={styles.cell}>
          <label>{PASSWORD.CONFIRM_NEW_PASSWORD}</label>
          <input
            id='newPasswordConfirm'
            type='password'
            disabled={isProfileChangeFetch}
            className={styles.input}
            value={newPasswordConfirm}
            onChange={_handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PasswordSettings;
