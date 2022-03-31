export interface IStore {
  id: string;
  username: string;
  usersurname: string;
  mobile: string;
  bio: string;
  email: string;
  password: string;
  newPassword: string;
  newPasswordConfirm: string;
  error: string;
  isProfileFetch: boolean;
  isProfileChangeFetch: boolean;
  searchHistory?: {
    timestamp: number;
    carData: {
      uid: string
    }
  }[];
}
