import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { setNewMessagesCount } from '../../../../controller/actions'

import scrollToEnd from '../../../../utils/scrollToEnd'

import './goToMessages.scss'

interface IProps {
  newMessagesCount: number
  setNewestMessagesCount: (count: number) => void
  messages: {
    type: 'user' | 'agent'
  }[]
}

interface IState {
  messagesAgentTemp: object[]
  updateType: 'state' | 'props' | ''
  isNewMessages: boolean
}

class GoToNewMessages extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      messagesAgentTemp: [],
      updateType: '',
      isNewMessages: false
    }
  }

  static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
    if (prevState.updateType === 'state') {
      return {
        updateType: ''
      }
    }

    const agentMessages = nextProps.messages.filter((msg) => msg.type !== 'user')
    const scrollContainer = document.querySelector('#messages')

    const isBottom = scrollContainer?.scrollHeight - (scrollContainer?.scrollTop + scrollContainer?.clientHeight) <= 390
    const isNewMessagesReceived = !isBottom && agentMessages.length !== prevState.messagesAgentTemp.length

    // @ts-ignore
    window._chat_new_messages_ = isNewMessagesReceived
      ? agentMessages.length - prevState.messagesAgentTemp.length
      : null

    return {
      isNewMessages: isNewMessagesReceived,
      messagesAgentTemp: agentMessages
    }
  }

  componentDidMount() {
    const { messages } = this.props

    this.setState({
      messagesAgentTemp: messages.filter((msg) => msg.type !== 'user')
    })

    document.querySelector('#messages').addEventListener('scroll', this._handleScroll)
  }

  // componentDidUpdate(prevProps: IProps, prevState: IState) {
  //   const { messagesAgentTemp, isNewMessages } = this.state
  //   const { setNewestMessagesCount, newMessagesCount } = this.props

  //   if (isNewMessages && (newMessagesCount !== prevProps.newMessagesCount)) {
  //     setNewestMessagesCount(messagesAgentTemp.length - prevState.messagesAgentTemp.length)
  //   }
  // }

  componentWillUnmount() {
    document.querySelector('#messages').removeEventListener('scroll', this._handleScroll)
  }

  _handleScroll = (e) => {
    // const { setNewestMessagesCount } = this.props

    if (e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight) {
      this.setState({
        isNewMessages: false,
        updateType: 'state'
      })

      // setNewestMessagesCount(0)
    }
  }

  _handleScrollClick = () => {
    // const { setNewestMessagesCount } = this.props

    this.setState({
      isNewMessages: false,
      updateType: 'state'
    })

    // setNewestMessagesCount(0)
    scrollToEnd()
  }

  render() {
    const { isNewMessages } = this.state

    return (
      <CSSTransition
        in={isNewMessages}
        appear={true}
        classNames='new-messages-anim'
        timeout={{ enter: 300, exit: 300 }}
        unmountOnExit={true}
      >
        <div
          className='newMessagesWrapper'
          tabIndex={0}
          aria-label='You have new Messages'
          role='button'
          onClick={this._handleScrollClick}
          onKeyDown={undefined}
        >
          <span className='messageText'>You have new Messages</span>
        </div>
      </CSSTransition>
    )
  }
}

const mapStateToProps = (state) => ({
  messages: state.chat.messages,
  newMessagesCount: state.chat.newMessagesCount
})

const mapDispatchToState = {
  setNewestMessagesCount: setNewMessagesCount
}

export default connect(mapStateToProps, mapDispatchToState)(GoToNewMessages)
