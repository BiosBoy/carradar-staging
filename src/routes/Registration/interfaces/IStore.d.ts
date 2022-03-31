export interface IStore {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  isRegistrationFetch: boolean;
  error: string;
}
