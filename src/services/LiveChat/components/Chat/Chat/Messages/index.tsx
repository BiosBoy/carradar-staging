import React from 'react'
import { connect } from 'react-redux'

import GoToNewMessages from './GoToNewMessages'
import Error from './Error'
import Welcome from './Welcome'
import Presets from './Presets'
import Message from './Message'
import Typing from './Typing'

import scrollToEnd from '../../../../utils/scrollToEnd'

interface IProps {
  messages: {
    text: string
    timestamp: number
    type: 'user' | 'agent'
  }[]
}

import './index.scss'

class Messages extends React.Component<IProps> {
  componentDidMount() {
    const { messages } = this.props

    if (messages.length > 1) {
      scrollToEnd()
    }
  }

  _renderMessages = () => {
    const { messages } = this.props

    return messages.map((msg) => <Message key={msg.timestamp} {...msg} />)
  }

  render() {
    return (
      <div id='messages' className='rcw-messages-container'>
        <GoToNewMessages />
        <Error />
        <Welcome />
        <Presets />
        <div className='messagesWrapper'>{this._renderMessages()}</div>
        <Typing />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  messages: state.chat.messages
})

export default connect(mapStateToProps, null)(Messages)
