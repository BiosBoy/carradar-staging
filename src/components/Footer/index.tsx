import React, { memo } from 'react';
import { connect } from 'react-redux';
import i18n from 'i18next';

import SubscribeEmail from './SubscribeEmail';
import Link from '../Link';

import styles from './index.scss';
import { IStore } from '../../interfaces/IStore';

const Footer = memo(() => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.companyDescription}>
          <img
            src='/assets/logo.png' alt='logo'
            className={styles.companyLogo}
          />
          <p className={styles.text}>CarRadar(c) - {i18n.t('footer.main_text')}</p>
        </div>
        <div className={styles.bullets}>
          <div className={styles.contentBlock}>
            <span className={styles.title}>{i18n.t('footer.blocks.first_block.title')}</span>
            <address className={styles.address}>
              <span className={styles.text}>{i18n.t('footer.blocks.first_block.content.line_1')}</span>
              <br />
              <span className={styles.text}>{i18n.t('footer.blocks.first_block.content.line_2')}</span>
              <br />
              <span className={styles.text}>{i18n.t('footer.blocks.first_block.content.line_3')}</span>
              <br />
              <span className={styles.text}>{i18n.t('footer.blocks.first_block.content.line_4')}</span>
            </address>
          </div>
          <div className={styles.contentBlock}>
            <span className={styles.title}>{i18n.t('footer.blocks.second_block.title')}</span>
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
            <div className={styles.social}>
              <a
                className={styles.iconTwitter} href='/'
                aria-label='twitter'
              />
              <a
                className={styles.iconInstagram} href='/'
                aria-label='twitter'
              />
              <a
                className={styles.iconFacebook} href='/'
                aria-label='facebook'
              />
              <a
                className={styles.iconTelegram} href='/'
                aria-label='telegram'
              />
            </div>
          </div>
          <div className={styles.contentBlock}>
            <SubscribeEmail />
          </div>
        </div>
      </div>
      <div className={styles.copywriting}>
        <div className={styles.copywritingContent}>
          <div className={styles.rights}>
            <span className={styles.text}>© 2021 CarRadar(c). {i18n.t('footer.copyright')}. v.0.0.1</span>
          </div>
          <div className={styles.links}>
            <Link className={styles.link} to='/about-us'>
              <span className={styles.text}>{i18n.t('header.menu.about_us')}</span>
            </Link>
            <Link className={styles.link} to='/contact'>
              <span className={styles.text}>{i18n.t('header.menu.contact')}</span>
            </Link>
            <Link className={styles.link} to='/sign-in'>
              <span className={styles.text}>{i18n.t('header.menu.sign_in')}</span>
            </Link>
            <Link className={styles.link} to='/sign-up'>
              <span className={styles.text}>{i18n.t('header.menu.sign_up')}</span>
            </Link>
            <Link className={styles.link} to='/policy'>
              <span className={styles.text}>{i18n.t('footer.policy')}</span>
            </Link>
          </div>
          <div className={styles.policy}>
            <Link
              className={styles.link} isNotSPA={true}
              to='https://linkedin.com/in/sviatoslav-kuzhelev-78797b104'
            >
              <span className={styles.text}>by Sviatoslav Kuzhelev</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

Footer.displayName = 'Footer';

const mapStateToProps = (state: IStore) => ({
  locale: state.app.locale
});

export default connect(mapStateToProps, null)(Footer);
