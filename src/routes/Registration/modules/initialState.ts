import { IStore } from '../interfaces/IStore';

const initialState: IStore = {
  username: '',
  usersurname: '',
  imageurl: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  isRegistrationFetch: false,
  isSocialRegistration: false,
  error: null
};

export default initialState;
