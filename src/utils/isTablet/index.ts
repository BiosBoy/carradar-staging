// @ts-nocheck
import { IBrowser } from 'redux-responsive'

const isTablet = (state: IBrowser) => {
  return state.browser ? state.browser.is.tablet : state.is.tablet
}

export default isTablet
