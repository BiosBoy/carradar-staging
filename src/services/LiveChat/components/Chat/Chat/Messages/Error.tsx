import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import { clearError } from '../../../../controller/actions'

import './error.scss'

interface IProps {
  removeError: () => void
  isConnectionError: boolean
}

class Errors extends React.PureComponent<IProps> {
  private _timerID: any

  componentDidUpdate() {
    const { isConnectionError } = this.props

    clearTimeout(this._timerID)

    if (isConnectionError && !this._timerID) {
      this._runTimer()
    }
  }

  componentWillUnmount() {
    clearTimeout(this._timerID)
  }

  _runTimer = () => {
    const { removeError } = this.props

    this._timerID = setTimeout(() => {
      removeError()

      this._timerID = null
    }, 2000)
  }

  render() {
    const { isConnectionError } = this.props

    return (
      <CSSTransition
        in={isConnectionError}
        appear={true}
        classNames='error-anim'
        timeout={{ enter: 500, exit: 500 }}
        unmountOnExit={true}
      >
        <div className='errorWrapper'>
          <span className='errorText'>
            Ooops! Something bad happen during sending your message. Try to reload the page.
          </span>
        </div>
      </CSSTransition>
    )
  }
}

const mapStateToProps = (state) => ({
  isConnectionError: state.chat.isConnectionError
})

const mapDispatchToProps = {
  removeError: clearError
}

export default connect(mapStateToProps, mapDispatchToProps)(Errors)
