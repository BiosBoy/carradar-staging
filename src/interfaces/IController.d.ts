import { TLanguages } from './IStore';

export interface IRequestError {
  errorMessage: string;
}

export interface IRequestSuccess {
  successMessage: string;
}

export interface ISetLocale {
  language: TLanguages;
}

export interface INewsletterAttempt {
  userEmail: string;
}

export interface INewsletterSaved {
  success?: boolean;
  error?: boolean;
}

export interface ISetLogged {
  isLogged: boolean;
}
