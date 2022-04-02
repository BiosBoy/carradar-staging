import React, { memo } from 'react';
import { connect } from 'react-redux';

import 'car-makes-icons/dist/style.css';

import ProgressiveImage from '../../../../components/ProgressiveImage';
import MockOverlay from './MockOverlay';
import Description from './Description';
import WithAnimation from './WithAnimation';
import Items from './Items';

import useLocales from './hooks/useLocales';

import { IStore } from '../../../../interfaces/IStore';
import { ICarCollectedData, ICarMainData } from '../../interfaces/IStore';

import styles from './index.scss';
import './animation.scss';

import { DATA } from './mocks';

export interface IProps {
  carImage: string;
  carMainData: ICarMainData;
  carCollectedData: ICarCollectedData[];
  isSearchInProgress: boolean;
  isSearchError: boolean;
}

const Results = memo((props: IProps) => {
  const { carImage, carMainData, carCollectedData, isSearchInProgress, isSearchError } = props;

  const { SECTION_TITLE, IMAGE_ALT, COLLECTED_DATA_TITLE } = useLocales();

  const isMock = !(carMainData && carCollectedData);
  const isActiveSearch = isSearchInProgress || isSearchError;
  const image = carImage || DATA.image;
  const mainData = carMainData || DATA.mainData;
  const collectedData = carCollectedData || DATA.collectedData;

  const renderMainData = () => {
    return (
      <div className={styles.main}>
        <div className={styles.imageWrap}>
          <ProgressiveImage image={{ path: image, alt: IMAGE_ALT, customClass: styles.image }} />
        </div>
        <Description mainData={mainData} />
      </div>
    );
  };

  const renderCollectedData = () => {
    return (
      <div className={styles.data}>
        <h4 className={styles.title}>{COLLECTED_DATA_TITLE}</h4>
        <Items collectedData={collectedData} />
      </div>
    );
  };

  return (
    <div
      id='results'
      className={`${styles.results} ${(isActiveSearch && styles.isSearchInProgress) || ''} ${
        (!isActiveSearch && isMock && styles.isMock) || ''
      }`}
    >
      <WithAnimation
        vinCode={mainData.vinCode}
        isActiveSearch={isActiveSearch}
        isSearchInProgress={isSearchInProgress}
        isSearchError={isSearchError}
      >
        <div className={styles.mainContent}>
          <div className={styles.resultsContent}>
            <h3>{SECTION_TITLE}</h3>
            {renderMainData()}
            {renderCollectedData()}
          </div>
          <MockOverlay isMock={isMock} />
        </div>
      </WithAnimation>
    </div>
  );
});

Results.displayName = 'Results';

const mapStateToProps = ({ app, home }: IStore) => ({
  language: app.locale,
  carImage: home.carData.image,
  carMainData: home.carData.mainData,
  carCollectedData: home.carData.collectedData,
  isSearchInProgress: home.statuses.isSearchInProgress,
  isSearchError: home.statuses.isSearchError
});

export default connect(mapStateToProps, null)(Results);
