import { LOGOUT_ATTEMPT, LOGOUT_SAVED, LOGOUT_ERROR, MANUAL_LOGOUT } from '../constants';

import { IType, IFetchError, ISetManualLogout } from '../interfaces/IController';

export const loadLogoutDataAttempt = (): IType => ({
  type: LOGOUT_ATTEMPT
});

export const loadLogoutDataSaved = (error?: string): { error: string; } & IType => ({
  error,
  type: LOGOUT_SAVED
});

export const loadLogoutDataError = (error: string): IFetchError & IType => ({
  error,
  type: LOGOUT_ERROR
});

export const setManualLogout = (status: boolean): ISetManualLogout & IType => ({
  status,
  type: MANUAL_LOGOUT
});
