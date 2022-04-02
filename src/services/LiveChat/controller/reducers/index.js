import {
  TOGGLE_CHAT,
  SENT_MESSAGE,
  RECEIVE_MESSAGE,
  WRITTING_MESSAGE,
  CONNECTION_ERROR,
  CLEAR_ERROR,
  SET_NEW_MESSAGES_COUNT
} from '../../constants';
import initialState from '../initialState';

import setErrorMessage from '../../utils/setErrorMessage';

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [TOGGLE_CHAT]: (state) => ({
    ...state,
    showChat: !state.showChat
  }),
  [WRITTING_MESSAGE]: (state, action) => ({
    ...state,
    currentMessage: action.message
  }),
  [SENT_MESSAGE]: (state, action) => ({
    ...state,
    isPendingRequest: true,
    currentMessage: '',
    messages: [
      ...state.messages,
      {
        text: action.text,
        timestamp: action.timestamp,
        type: 'user'
      }
    ]
  }),
  [RECEIVE_MESSAGE]: (state, action) => ({
    ...state,
    isPendingRequest: false,
    messages: [
      ...state.messages,
      {
        text: action.text,
        timestamp: action.timestamp,
        type: 'agent'
      }
    ]
  }),
  [CONNECTION_ERROR]: (state) => ({
    ...state,
    isPendingRequest: false,
    isConnectionError: true,
    messages: setErrorMessage(state.messages)
  }),
  [CLEAR_ERROR]: (state) => ({
    ...state,
    isConnectionError: false
  }),
  [SET_NEW_MESSAGES_COUNT]: (state, action) => ({
    ...state,
    newMessagesCount: action.count
  })
};

// ------------------------------------
// Reducer
// ------------------------------------
const reducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};

export default reducer;
