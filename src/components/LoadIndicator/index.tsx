import React from 'react';

import styles from './index.scss';

export interface IProps {
  type?: 'flat' | 'circle';
  color?: 'grey' | 'white' | 'black' | 'blue' | 'green';
}

class Loader extends React.PureComponent<IProps> {
  _addChildren = ({ count }) => {
    const { color = 'grey' } = this.props;

    return Array.from(Array(count).keys()).map((key) => <div key={key} className={styles[color]} />);
  };

  _flatLoader = () => {
    return <div className={styles.flatLoader}>{this._addChildren({ count: 4 })}</div>;
  };

  _circleLoader = () => {
    return <div className={styles.spinnerCircle}>{this._addChildren({ count: 12 })}</div>;
  };

  render() {
    const { type } = this.props;

    return type === 'circle' ? this._circleLoader() : this._flatLoader();
  }
}

export default Loader;
