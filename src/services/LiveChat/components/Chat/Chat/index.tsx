import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import Header from './Header'
import Messages from './Messages'
import Typeform from './Typeform'

interface IProps {
  isOpen: boolean
}

import './index.scss'

class Chat extends React.Component<IProps> {
  render() {
    const { isOpen } = this.props

    return (
      <CSSTransition
        in={isOpen}
        appear={true}
        classNames='chat-anim'
        timeout={{ enter: 300, exit: 0 }}
        unmountOnExit={true}
      >
        <div className='rcw-conversation-container'>
          <Header />
          <Messages />
          <Typeform />
        </div>
      </CSSTransition>
    )
  }
}

const mapStateToProps = (state) => ({
  isOpen: state.chat.showChat
})

export default connect(mapStateToProps, null)(Chat)
