import { IStore } from '../interfaces/IStore'

const initialState: IStore = {
  userdata: '',
  password: '',
  isLoginFetch: false,
  error: null
}

export default initialState
