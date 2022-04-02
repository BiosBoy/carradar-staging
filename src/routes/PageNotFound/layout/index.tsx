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
      <div className={styles.notFoundWrap}>
        <h3 className={styles.headline}>404 Sorry, Page Not Found!</h3>
        <p className={styles.text}>This page is not exists or missed on the server.</p>
        <img
          src='/assets/404.png' alt='404'
          className={styles.image}
        />
        <Link
          to='/' type='rounded'
          withBackground={true}
        >
          Go back to the Home page
        </Link>
      </div>
    );
  }
}

export default PageNotFound;
