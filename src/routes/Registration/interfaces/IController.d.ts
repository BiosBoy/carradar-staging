export interface IType {
  type: string;
}

export interface IFetchAttempt {
  carNumber: string;
}

export interface IFetchSaved {
  payload: object;
}

export interface IFetchError {
  error: string;
}

export interface IRegistrationInput {
  id: string;
  value: string;
}
