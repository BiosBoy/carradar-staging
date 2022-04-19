export interface IStore {
  username: string;
  usersurname: string;
  email: string;
  imageurl: string;
  password: string;
  passwordConfirmation: string;
  isRegistrationFetch: boolean;
  isSocialRegistration: boolean;
  error: string;
}
