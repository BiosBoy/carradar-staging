import { IStore } from '../interfaces/IStore'

const initialState: IStore = {
  isManualReload: false,
  isLogoutFetch: false,
  error: null
}

export default initialState
