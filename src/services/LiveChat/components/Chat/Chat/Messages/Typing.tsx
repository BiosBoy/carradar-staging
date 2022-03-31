import React from 'react'
import { connect } from 'react-redux'

interface IProps {
  isPendingRequest: boolean
}

import './typing.scss'

class Typing extends React.Component<IProps> {
  render() {
    const { isPendingRequest } = this.props

    return (
      <div className={`typingWrapper ${isPendingRequest ? 'show' : 'hide'}`}>
        <span>Support is thinking</span>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isPendingRequest: state.chat.isPendingRequest
})

export default connect(mapStateToProps, null)(Typing)
