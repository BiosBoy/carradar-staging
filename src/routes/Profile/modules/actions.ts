import {
  PROFILE_ATTEMPT,
  PROFILE_SAVED,
  PROFILE_ERROR,
  PROFILE_CHANGE_ATTEMPT,
  PROFILE_CHANGE_SAVED,
  PROFILE_CHANGE_ERROR,
  CHANGE_PROFILE_DATA,
  ERASE_PROFILE
} from '../constants';

import { IType, IFetchError, IFetchSaved, IChangeProfileData } from '../interfaces/IController';
import { ISearchHistory } from '../interfaces/IStore';

export const loadProfileDataAttempt = (): IType => ({
  type: PROFILE_ATTEMPT
});

export const loadProfileDataSaved = (
  username: string,
  email: string,
  mobile: string,
  bio: string,
  usersurname: string,
  searchHistory: ISearchHistory
): IFetchSaved & IType => ({
  username,
  email,
  mobile,
  bio,
  usersurname,
  searchHistory,
  type: PROFILE_SAVED
});

export const loadProfileDataError = (error: string): IFetchError & IType => ({
  error,
  type: PROFILE_ERROR
});

export const saveNewDataAttempt = (): IType => ({
  type: PROFILE_CHANGE_ATTEMPT
});

export const saveNewDataSaved = (emailID: string): { emailID: string } & IType => ({
  emailID,
  type: PROFILE_CHANGE_SAVED
});

export const saveNewDataError = (error: string): IFetchError & IType => ({
  error,
  type: PROFILE_CHANGE_ERROR
});

export const changeProfileData = (id, value): IChangeProfileData & IType => ({
  id,
  value,
  type: CHANGE_PROFILE_DATA
});

export const eraseProfileData = (): IType => ({
  type: ERASE_PROFILE
});
