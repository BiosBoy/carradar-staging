import React from 'react';

import Link from '../../../components/Link';

import styles from './index.scss';

class PageNotFound extends React.PureComponent {
  componentDidMount() {
    // @ts-ignore
    window.prerenderReady = true;
  }

  render() {
    return (
      <div className={styles.maintanceWrap}>
        <h3 className={styles.headline}>We&#39;re improving your Experience.</h3>
        <p className={styles.text}>This page will back up and running again shortly</p>
        <img src='/assets/on_maintance.png' alt='on_maintance' className={styles.image} />
        <Link to='/' type='rounded' withBackground={true}>
          Go back to the Home page
        </Link>
      </div>
    );
  }
}

export default PageNotFound;
