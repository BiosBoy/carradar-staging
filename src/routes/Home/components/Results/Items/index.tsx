import React from 'react';

import DataCell from './DataCell';

import useLocales from '../hooks/useLocales';

import styles from '../index.scss';
import { ICarCollectedData } from '../../../interfaces/IStore';

const Items = ({ collectedData }: { collectedData: ICarCollectedData[]; }) => {
  const { COLLECTED_DATA_LABELS_ARRAY } = useLocales();

  if (!collectedData) {
    return null;
  }

  const renderDataCells = (dataCell: ICarCollectedData, index: number) => (
    <DataCell
      key={dataCell.data}
      icon={dataCell.icon}
      title={COLLECTED_DATA_LABELS_ARRAY[index]}
      data={dataCell.data}
    />
  );

  return <div className={styles.items}>{collectedData.map(renderDataCells)}</div>;
};

export default Items;
