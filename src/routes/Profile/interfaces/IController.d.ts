import { ISearchHistory } from './IStore';

export interface IType {
  type: string;
}

export interface IFetchAttempt {
  carNumber: string;
}

export interface IFetchSaved {
  username?: string;
  email?: string;
  mobile?: string;
  bio?: string;
  usersurname?: string;
  searchHistory?: ISearchHistory;
}

export interface IFetchError {
  error: string;
}

export interface IChangeProfileData {
  id: string;
  value: string;
}

export interface INewDataAttempt {}
