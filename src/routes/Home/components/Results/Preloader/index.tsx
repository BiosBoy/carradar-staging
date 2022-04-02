/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import i18n from 'i18next';

import isMobile from '../../../../../utils/isMobile';
import { IStore } from '../../../../../interfaces/IStore';

import Clouds from './Clouds';

import styles from './index.scss';

const ResultsPreloader = ({ isError, isMobileLayout }: { isError?: boolean; isMobileLayout?: boolean }) => {
  const MOBILE_TEXT = i18n.t('pages.home.results_section.active_search.info_short');
  const REGULAR_TEXT = i18n.t('pages.home.results_section.active_search.info');

  if (isError) {
    return (
      <div className={styles.preloaderWrap}>
        <div className={styles.head}>
          <h3>{i18n.t('pages.home.results_section.error.title')}</h3>
          <p>{i18n.t('pages.home.results_section.error.text')}</p>
        </div>
        <div className={styles.searchError}>
          <img className={styles.errorImg} alt='search_error' src='/assets/search_error.png' />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.preloaderWrap}>
      <div className={styles.head}>
        <h3>
          {isMobileLayout
            ? i18n.t('pages.home.results_section.active_search.title_short')
            : i18n.t('pages.home.results_section.active_search.title')}
        </h3>
        <p>{i18n.t('pages.home.results_section.active_search.text')}</p>
      </div>
      <div className={styles.animationsWrap}>
        <Clouds />
        <div className={styles.carWarp}>
          <img src='/assets/car_pure.png' alt='car_image' className={styles.car} />
        </div>
      </div>
      <div className={styles.progressWrap}>
        <div className={styles.bar} />
      </div>
      <div className={styles.bottom}>
        <p>{isMobileLayout ? MOBILE_TEXT : REGULAR_TEXT}</p>
      </div>
    </div>
  );
};

const mapStateToProps = ({ browser, app }: IStore) => ({
  isMobileLayout: isMobile(browser),
  locale: app.locale
});

export default connect(mapStateToProps, null)(ResultsPreloader);
