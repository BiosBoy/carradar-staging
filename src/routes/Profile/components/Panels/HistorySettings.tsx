/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { useSelector } from 'react-redux';
import timestampToDate from 'timestamp-to-date';

import styles from './index.scss';

import { IStore } from '../../../../interfaces/IStore';
import { ISearchHistory } from '../../interfaces/IStore';
import useLocales from '../../hooks/useLocales';

const HistorySettings = () => {
  const { searchHistory } = useSelector(({ profile }: IStore) => profile);
  const { HISTORY } = useLocales();

  const _renderRow = (children, index) => (
    <div key={index} className={styles.row}>
      {children}
    </div>
  );

  const _renderCell = ({ timestamp, carData }: ISearchHistory, index) => (
    <div key={timestamp} className={`${styles.cell} ${styles.historyCell}`}>
      {carData.image ? (
        <img className={styles.carImage} src={carData.image} alt='' />
      ) : (
        <div className={styles.imageBox}>N/A</div>
      )}
      <div className={styles.historyItem}>
        <label>№ {index + 1}</label>
        <label>
          {HISTORY.DATE}: {timestampToDate('1484448039504', 'yyyy-MM-dd')}
        </label>
        <label>
          {HISTORY.VIN}: {carData.uid}
        </label>
      </div>
    </div>
  );

  const _renderHistoryList = () => {
    const rows = [];
    let tempCells = [];

    searchHistory.forEach((item, index) => {
      tempCells.push(_renderCell(item, index));

      if (index % 2) {
        rows.push(_renderRow(tempCells, index));
        tempCells = [];
      }
    });

    return rows;
  };

  const _renderPlaceholder = (
    <div className={styles.cell}>
      <label>{HISTORY.TEXT}</label>
    </div>
  );

  return (
    <div className={styles.panel}>
      <h4>{HISTORY.SUB_TITLE}</h4>
      {!searchHistory || searchHistory.length === 0 ? _renderPlaceholder : _renderHistoryList()}
    </div>
  );
};

export default HistorySettings;
