import { getStore } from './helpers/localStorage'

import { IStore } from '../interfaces/IStore'

const initialState: IStore = {
  isAccepted: getStore({ storeKey: 'gdpr' })
}

export default initialState
