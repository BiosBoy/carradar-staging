export interface ISearchHistory {
  timestamp: number;
  carData: {
    image: string;
    uid: string;
  };
}

export interface IStore {
  id: string;
  username: string;
  usersurname: string;
  imageurl: string;
  mobile: string;
  bio: string;
  email: string;
  password: string;
  newPassword: string;
  newPasswordConfirm: string;
  error: string;
  isProfileFetch: boolean;
  isProfileChangeFetch: boolean;
  searchHistory?: ISearchHistory[];
}
