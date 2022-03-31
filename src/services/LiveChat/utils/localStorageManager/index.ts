import isValue from '../isValue'
import isArray from '../isArray'
import isObject from '../isObject'

import { IProps, ILocalStorageManager, IKeyData, IDeleteFromStore } from './interfaces'

const PATH = '/'
const DOMAIN = (__DEV__ && 'localhost') || '.carradar.com.ua'

/**
 *  @name LocalStorageManager
 *  @author 3p-sviat
 *  @version 1.0.0
 *  @description suitable way for managing localStorageData
 *
 *  @params {object} config - configuration of the watcher
 *  @params {string} config.storeKeys - a main key for bind with its data inside localStorage
 *  @params {string|number|boolean|object} config.storeData - a main config for localStorage set
 *
 *  @property {_state} object - main util state.
 *  @property {_state.useCookieStore} object - main util state.
 *
 *  @returns {constructor}
 *
 */
class LocalStorageManager {
  private _state: {
    useCookieStore: boolean
    isLocalStorageAvailable: boolean
  }

  constructor() {
    this._state = {
      useCookieStore: false,
      isLocalStorageAvailable: false
    }
  }

  _setState = (newValue: { [x: string]: any }) => {
    this._state = {
      ...this._state,
      ...newValue
    }
  }

  _isComplexityStore = (storeData: any) => isArray(storeData) || isObject(storeData)

  _isLocalStorageAvailable = () => {
    try {
      const { localStorage } = window

      const test = '__isLocalStorageAvailable__'

      localStorage.setItem(test, test)
      localStorage.removeItem(test)

      return true
    } catch (e) {
      return false
    }
  }

  _setInitPayload = (isLocalStorageAvailable: boolean, storeKey: string) => {
    const cookieData = this._getCookie(storeKey)
    const localStorageData = localStorage.getItem(storeKey)

    if (isLocalStorageAvailable && !this._state.useCookieStore && isValue(cookieData)) {
      localStorage.setItem(storeKey, cookieData)

      this._deleteCookie(storeKey)
    } else if ((!isLocalStorageAvailable || this._state.useCookieStore) && isValue(localStorageData)) {
      this._setCookie(storeKey, localStorageData)

      localStorage.removeItem(storeKey)
    }
  }

  _getCookie = (cookieKey: string) => {
    const cookieRaw = document.cookie.split('; ')
    const cookieKeyValuePair = cookieRaw.find((KeyValue: string) => KeyValue.startsWith(cookieKey))

    const cookieValue = cookieKeyValuePair ? cookieKeyValuePair.split('=')[1] : null

    return cookieValue
  }

  _setCookie = (storeKey: string, storeData: string) => {
    document.cookie = `${storeKey}=${storeData};path=${PATH};domain=${DOMAIN};expires=Fri, 31 Dec 9999 23:59:59 GMT";`
  }

  _deleteCookie(cookieKey: string) {
    if (!this._getCookie(cookieKey)) {
      return
    }

    document.cookie = `${cookieKey}="";path=${PATH};domain=${DOMAIN};expires=Thu, 01 Jan 1970 00:00:01 GMT";`
  }

  _normalizeStoreData = (storeData: any) => {
    const normalizedStoreData = this._isComplexityStore(storeData) ? JSON.stringify(storeData) : String(storeData)

    return normalizedStoreData
  }

  _setStore = ({ storeKey, storeData }: ILocalStorageManager) => {
    try {
      const normalizedStoreData = this._normalizeStoreData(storeData)

      if (this._isLocalStorageAvailable() && !this._state.useCookieStore) {
        const { localStorage } = window

        localStorage.setItem(storeKey, normalizedStoreData)
      } else {
        this._setCookie(storeKey, normalizedStoreData)
      }
    } catch (e) {
      throw new Error(`Some error during localStorage data set: ${e}`)
    }
  }

  /**
   * Returns a boolean indicating whether an data with the specified key exists or not.
   * @name LocalStorageManager#hasKey
   * @function
   *
   */
  hasKey = ({ storeKey }: IKeyData) => {
    if (!storeKey) {
      console.error(`Store key was missed: ${storeKey}`)

      return null
    }

    let currentStore = null

    if (this._isLocalStorageAvailable() && !this._state.useCookieStore) {
      const { localStorage } = window

      currentStore = localStorage.getItem(storeKey)
    } else {
      currentStore = this._getCookie(storeKey)
    }

    return isValue(currentStore)
  }

  /**
   * Allow us to set data by key inside localStorage.
   * @name LocalStorageManager#addStore
   * @function
   *
   */
  addStore = ({ storeKey, storeData }: ILocalStorageManager) => {
    if (!isValue(storeData) || !storeKey) {
      console.error('Some data missed among your initialization config: ', storeKey, storeData)

      return
    }

    this._setStore({ storeKey, storeData })

    return this.getStore({ storeKey })
  }

  /**
   * Returns an object with data inside particular key from localStore.
   * @name LocalStorageManager#getStore
   * @function
   *
   * @readonly
   */
  updateStore = ({ storeKey, storeData }: ILocalStorageManager) => {
    if (!storeKey || !isValue(storeData)) {
      console.error(`Something wrong with init data: ${storeKey}, ${storeData}`)

      return null
    }

    this._setStore({ storeKey, storeData })

    return this.getStore({ storeKey })
  }

  /**
   * Returns an object with data inside particular key from localStore.
   * @name LocalStorageManager#getStore
   * @function
   *
   * @readonly
   */
  getStore = ({ storeKey }: IKeyData) => {
    if (!storeKey) {
      console.error(`Store key was missed: ${storeKey}`)

      return null
    }

    let currentStore = null

    if (this._isLocalStorageAvailable() && !this._state.useCookieStore) {
      const { localStorage } = window

      currentStore = localStorage.getItem(storeKey)
    } else {
      currentStore = this._getCookie(storeKey)
    }

    try {
      return JSON.parse(currentStore)
    } catch {
      return currentStore
    }
  }

  /**
   * Allow delete some key-value pair from localStore.
   * @name LocalStorageManager#checkString
   * @function
   *
   */
  removeStore = ({ storeKey }: IKeyData) => {
    try {
      if (this._isLocalStorageAvailable() && !this._state.useCookieStore) {
        const { localStorage } = window

        localStorage.removeItem(storeKey)
      } else {
        this._deleteCookie(storeKey)
      }
    } catch (e) {
      throw new Error(`Some problem occurred during storage removing, ${e}`)
    }
  }

  /**
   * Allows to set new data in some particular store by key.
   * @name LocalStorageManager#addToStore
   * @function
   *
   */
  addToStore = ({ storeKey, storeData }: any) => {
    if (!isValue(storeData) || !storeKey) {
      console.error('Store was not updated! Error in config: ', storeKey, storeData)

      return null
    }

    const prevStore = this.getStore({ storeKey })

    const newData =
      (isArray(prevStore) && [...prevStore, storeData]) || (isObject(prevStore) && { ...prevStore, ...storeData })

    this._setStore({
      storeKey,
      storeData: newData
    })

    return this.getStore({ storeKey })
  }

  /**
   * Allows to delete some data from the store by key.
   * @name LocalStorageManager#deleteFromStore
   * @function
   *
   */
  removeFromStore = ({ storeKey, valID, valMatch }: IDeleteFromStore) => {
    const prevStore = this.getStore({ storeKey })

    const filterArrayData = () => {
      if (valID) {
        return [...prevStore.filter((unit: any) => unit[valID] !== valMatch)]
      }

      return [...prevStore.filter((unit: any) => unit !== valMatch)]
    }

    const filterObjectData = () => {
      const newObjData = {}

      Object.keys(prevStore).forEach((key) => {
        if (key === valID && prevStore[valID] === valMatch) {
          return
        }

        newObjData[key] = prevStore[key]
      })

      return newObjData
    }

    this._setStore({
      storeKey,
      storeData: (isArray(prevStore) && filterArrayData()) || (isObject(prevStore) && filterObjectData())
    })

    return this.getStore({ storeKey })
  }

  init = (props: IProps) => {
    const { storeKey, useCookieStore } = props
    const isLocalStorageAvailable = this._isLocalStorageAvailable()

    this._setState({
      useCookieStore: useCookieStore,
      isLocalStorageAvailable
    })

    // in case we have some data stored
    // before initialization stage in cookie/localStorage
    this._setInitPayload(isLocalStorageAvailable, storeKey)
  }
}

export default LocalStorageManager

/**
 * @deprecated
 *
 */
export const { hasKey, addStore, updateStore, getStore, removeStore, removeFromStore, addToStore, init } =
  new LocalStorageManager()
