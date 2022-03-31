import { getStore } from './helpers/localStorage'

import { IStore } from '../interfaces/IStore'

const initialState: IStore = {
  showChat: false,
  isOpen: false,
  isPendingRequest: false,
  isConnectionError: false,
  newMessagesCount: 0,
  currentMessage: getStore({ storeKey: 'chat-current-input' }),
  messages: getStore({ storeKey: 'chat-data' })
}

export default initialState
