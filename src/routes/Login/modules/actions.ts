import { LOGIN_ATTEMPT, LOGIN_SAVED, LOGIN_ERROR, LOGIN_INPUT } from '../constants';

import { ILoginInput, IType, IFetchError } from '../interfaces/IController';

export const loadLoginDataAttempt = (): IType => ({
  type: LOGIN_ATTEMPT
});

export const loadLoginDataSaved = (): IType => ({
  type: LOGIN_SAVED
});

export const loadLoginDataError = (error: string): IFetchError & IType => ({
  error,
  type: LOGIN_ERROR
});

export const setLoginInput = ({ id, value }: ILoginInput): ILoginInput & IType => ({
  id,
  value,
  type: LOGIN_INPUT
});
