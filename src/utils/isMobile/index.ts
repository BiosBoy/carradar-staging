// @ts-nocheck
import { IBrowser } from 'redux-responsive'

const isMobile = (state: IBrowser) => {
  return state.browser ? state.browser.is.mobile : state.is.mobile
}

export default isMobile
