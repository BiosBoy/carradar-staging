import {
  ACCEPT_COOKIE
} from '../../constants'

import initialState from '../initialState'

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ACCEPT_COOKIE]: (state) => ({
    ...state,
    isAccepted: true
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const reducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export default reducer
