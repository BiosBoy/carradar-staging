import React, { memo, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import { requestNotifyClear } from '../../controller/actions'
import { IStore } from '../../interfaces/IStore'

import styles from './index.scss'

export interface IProps {
  successMessage?: string
  errorMessage?: string
  runRemovePopUp: () => void
}

let TIMER_ID = null

const NotifyPopUp = memo(({ errorMessage, successMessage, runRemovePopUp }: IProps) => {
  const [isAppear, setAppearFlag] = useState(true)

  useEffect(() => {
    TIMER_ID = setTimeout(() => {
      setAppearFlag(!isAppear)
    }, 5000)

    return () => clearTimeout(TIMER_ID)
  }, [!!errorMessage, !!successMessage])

  if (!errorMessage && !successMessage) {
    return null
  }

  return (
    <CSSTransition
      appear={true}
      in={(!!errorMessage || !!successMessage) && isAppear}
      classNames='errorPopup'
      timeout={{ enter: 500, exit: 500 }}
      unmountOnExit={true}
      onExited={() => runRemovePopUp()}
    >
      <div className={successMessage ? styles.successWrap : styles.errorWrap}>
        <span>{successMessage ? `${successMessage} 🎉` : errorMessage}</span>
      </div>
    </CSSTransition>
  )
})

const mapStateToProps = ({ app }: IStore) => ({
  successMessage: app.success,
  errorMessage: app.error
})

const mapDispatchToProps = {
  runRemovePopUp: requestNotifyClear
}

export default connect(mapStateToProps, mapDispatchToProps)(NotifyPopUp)
