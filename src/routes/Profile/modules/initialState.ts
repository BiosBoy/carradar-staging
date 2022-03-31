import { IStore } from '../interfaces/IStore'

const initialState: IStore = {
  id: '',
  username: '',
  usersurname: '',
  mobile: '',
  bio: '',
  email: '',
  password: '',
  newPassword: '',
  newPasswordConfirm: '',
  error: null,
  isProfileFetch: false,
  isProfileChangeFetch: false,
  searchHistory: null
}

export default initialState
