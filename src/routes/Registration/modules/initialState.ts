import { IStore } from '../interfaces/IStore';

const initialState: IStore = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  isRegistrationFetch: false,
  error: null
};

export default initialState;
