// @ts-nocheck
import React from 'react'
import { withRouter } from 'react-router'

import styles from './index.scss'

import Search from '../components/Search'
import Results from '../components/Results'

class Home extends React.Component {
  componentDidMount() {
    // @ts-ignore
    window.prerenderReady = true
  }

  render() {
    return (
      <div className={styles.homePage}>
        <Search />
        <Results />
      </div>
    )
  }
}

export default withRouter(Home)
