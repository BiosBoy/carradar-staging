import { IStore } from '../interfaces/IStore';

const initialState: IStore = {
  userdata: '',
  password: '',
  isLoginFetch: false,
  isSocial: false,
  error: null,
  token: null
};

export default initialState;
