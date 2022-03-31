// @ts-nocheck
import { IBrowser } from 'redux-responsive'

const isDesktop = (state: IBrowser) => {
  return state.browser ? state.browser.is.desktop : state.is.desktop
}

export default isDesktop
