export interface IType {
  type: string;
}

export interface IFetchAttempt {
  carNumber: string;
}

export interface IFetchSaved {}

export interface IFetchError {
  error: string;
}

export interface ISetManualLogout {
  status: boolean;
}
