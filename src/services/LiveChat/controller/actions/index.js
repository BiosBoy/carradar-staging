import {
  TOGGLE_CHAT,
  SENT_MESSAGE,
  RECEIVE_MESSAGE,
  WRITTING_MESSAGE,
  CLEAR_ERROR,
  CONNECTION_ERROR,
  SET_NEW_MESSAGES_COUNT
} from '../../constants'

const toggleChat = (imageID) => ({
  type: TOGGLE_CHAT,
  imageID
})

const writeMessage = (message) => ({
  type: WRITTING_MESSAGE,
  message
})

const sentMessage = ({ text, timestamp }) => ({
  type: SENT_MESSAGE,
  text,
  timestamp
})

const receiveMessage = ({ text, timestamp }) => ({
  type: RECEIVE_MESSAGE,
  text,
  timestamp
})

const clearError = () => ({
  type: CLEAR_ERROR
})

const connectionError = () => ({
  type: CONNECTION_ERROR
})

const setNewMessagesCount = (count) => ({
  type: SET_NEW_MESSAGES_COUNT,
  count
})

export { toggleChat, sentMessage, receiveMessage, writeMessage, clearError, connectionError, setNewMessagesCount }
