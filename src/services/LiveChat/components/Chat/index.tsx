import React from 'react'
import { connect } from 'react-redux'

import watchTabSwitch from '../../utils/watchTabSwitch'

import Chat from './Chat'
import Launcher from './Launcher'

import 'react-chat-widget/lib/styles.css'
import './index.scss'

import { IStore } from '../../../../interfaces/IStore'

class App extends React.Component<{ isOpen: boolean }> {
  componentDidMount() {
    watchTabSwitch()
  }

  render() {
    const { isOpen } = this.props

    return (
      <div className={`rcw-widget-container custom ${isOpen ? 'open' : ''}`}>
        <Chat />
        <Launcher />
      </div>
    )
  }
}

const mapStateToProps = (state: IStore) => ({
  isOpen: state.chat.showChat
})

export default connect(mapStateToProps, null)(App)
