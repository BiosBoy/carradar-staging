import {
  NEWSLETTER_ATTEMPT,
  NEWSLETTER_ERROR,
  NEWSLETTER_SAVED,
  REQUEST_NOTIFY_ERROR,
  REQUEST_NOTIFY_SUCCESS,
  REQUEST_NOTIFY_CLEAR,
  SET_LOCALE,
  SET_LOGGED,
  TOGGLE_DARK_MODE
} from '../../constants';

import {
  INewsletterAttempt,
  INewsletterSaved,
  IRequestError,
  IRequestSuccess,
  ISetLocale,
  ISetLogged
} from '../../interfaces/IController';
import { TLanguages } from '../../interfaces/IStore';
import { IType } from '../../routes/Home/interfaces/IController';

export const requestError = (payload: string): IRequestError & IType => ({
  type: REQUEST_NOTIFY_ERROR,
  errorMessage: payload
});

export const requestSuccess = (payload: string): IRequestSuccess & IType => ({
  type: REQUEST_NOTIFY_SUCCESS,
  successMessage: payload
});

export const requestNotifyClear = (): IType => ({
  type: REQUEST_NOTIFY_CLEAR
});

export const setLocale = (payload: TLanguages): ISetLocale & IType => ({
  language: payload,
  type: SET_LOCALE
});

export const setLogged = (isLogged: boolean): ISetLogged & IType => ({
  isLogged,
  type: SET_LOGGED
});

export const newsletterSubscriptionAttempt = (payload: string): INewsletterAttempt & IType => ({
  userEmail: payload,
  type: NEWSLETTER_ATTEMPT
});

export const newsletterSubscriptionSaved = (payload: INewsletterSaved): INewsletterSaved & IType => ({
  error: payload.error,
  success: payload.success,
  type: NEWSLETTER_SAVED
});

export const newsletterSubscribeError = (payload: string): { error: string } & IType => ({
  error: payload,
  type: NEWSLETTER_ERROR
});

export const toggleDarkMode = (): IType => ({
  type: TOGGLE_DARK_MODE
});
