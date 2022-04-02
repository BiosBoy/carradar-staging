/* eslint-disable max-len */
import React, { useEffect, memo } from 'react';
import { withRouter } from 'react-router';
import { useSelector } from 'react-redux';

import useLocales from '../hooks/useLocales';

import { IStore } from '../../../interfaces/IStore';

import styles from './index.scss';

const AboutUs = memo(() => {
  const { SECTION_TITLE, FIRST_TITLE, ZIP, ADDRESS, CITY, COUTRY, SECOND_TITLE } = useLocales();

  const isDesktop = useSelector(({ browser }: IStore) => browser.is.desktop);

  useEffect(() => {
    // @ts-ignore
    window.prerenderReady = true;
  }, []);

  return (
    <div className={styles.contactsWrap}>
      <h1 className={styles.headline}>{SECTION_TITLE}</h1>
      <div className={styles.mainContent}>
        <div className={styles.leftSection}>
          <div className={styles.bullets}>
            <div className={styles.contentBlock}>
              <span className={styles.title}>{FIRST_TITLE}</span>
              <address className={styles.address}>
                <span className={styles.text}>{ZIP}</span>
                <br />
                <span className={styles.text}>{ADDRESS}</span>
                <br />
                <span className={styles.text}>{CITY}</span>
                <br />
                <span className={styles.text}>{COUTRY}</span>
              </address>
            </div>
            <div className={styles.contentBlock}>
              <span className={styles.title}>{SECOND_TITLE}</span>
              <div className={styles.tel}>
                <i className={styles.iconTel} />
                <a className={styles.text} href='tel:#'>
                  +38 (050) 824-87-25
                </a>
              </div>
              <div className={styles.email}>
                <i className={styles.iconEmail} />
                <a className={styles.text} href='mailto:#'>
                  info@carradar.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d168106.76031084906!2d24.979974784365417!3d48.82639322479621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473120e689604c65%3A0x2b4c3ee2e683a31e!2sTlumats&#39;kyi%20district%2C%20Ivano-Frankivsk%20Oblast!5e0!3m2!1sen!2sua!4v1643470266948!5m2!1sen!2sua'
          width={!isDesktop ? '100%' : 600}
          height='450'
          style={{ border: 0 }}
          loading='lazy'
        />
      </div>
    </div>
  );
});

export default withRouter(AboutUs);
