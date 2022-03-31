export interface IProps {
  useCookieStore?: boolean
  storeKey?: string
}
export interface IData {
  storeData: string | number | object | boolean | string[] | number[] | object[]
}

export interface IKeyData {
  storeKey: string
}

export interface ILocalStorageManager extends IData, IKeyData {}

export interface IDeleteFromStore extends IKeyData {
  valID?: number | string
  valMatch: number | string
}

export interface IConstructor {}

export interface IStore {
  localStorage: Storage
}
