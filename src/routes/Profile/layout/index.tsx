import React, { useEffect, useState } from 'react'
import { push } from 'connected-react-router'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router'

import Preloader from '../../../components/Preloader'
import Panels from '../components/Panels'
import SideBar from '../components/Sidebar'

import { loadProfileDataAttempt } from '../modules/actions'
import useLocales from '../hooks/useLocales'
import getLangPrefix from '../../../utils/gelLangPrefix'

import { IStore } from '../../../interfaces/IStore'

import styles from './index.scss'

const Profile = () => {
  const { SECTION_TITLE } = useLocales()

  const [activePanel, setActivePanel] = useState('account')

  const dispatch = useDispatch()
  const { isLogged, locale } = useSelector(({ app }: IStore) => app)
  const { isProfileFetch } = useSelector(({ profile }: IStore) => profile)

  useEffect(() => {
    dispatch(loadProfileDataAttempt())
  }, [])

  useEffect(() => {
    if (!isLogged) {
      dispatch(push(getLangPrefix(locale)))
    }
  }, [isLogged])

  if (isProfileFetch) {
    return (
      <div className={styles.profileWrap}>
        <Preloader />
      </div>
    )
  }

  return (
    <div className={styles.profileWrap}>
      <h1 className={styles.headline}>{SECTION_TITLE}</h1>
      <div className={styles.profileContainer}>
        <SideBar activePanel={activePanel} setActivePanel={setActivePanel} />
        <Panels activePanel={activePanel} />
      </div>
    </div>
  )
}

export default withRouter(Profile)
