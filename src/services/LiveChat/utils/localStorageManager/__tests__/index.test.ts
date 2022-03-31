import LocalStorageManager, { addStore, addToStore, updateStore, removeStore, removeFromStore, getStore } from '..'

import initialState, {
  updatedStore,
  addToObject,
  addToArray,
  removeFromObject,
  removeFromArray,
  removeFromArrayString,
  notExistsState,
  falseState,
  zeroNumberState
} from './mocks'

const localStorageManager = new LocalStorageManager()

describe('localStorageManager()', () => {
  it('should "hasKey" method works with different data', () => {
    expect(localStorageManager.hasKey(notExistsState)).toBeFalsy()

    addStore(initialState)

    expect(localStorageManager.hasKey(initialState)).toBeTruthy()
    removeStore(initialState)

    addStore(falseState)

    expect(localStorageManager.hasKey(falseState)).toBeTruthy()
    removeStore(falseState)

    addStore(zeroNumberState)

    expect(localStorageManager.hasKey(zeroNumberState)).toBeTruthy()
    removeStore(zeroNumberState)
  })
  it('should add store to the localStorage Store', () => {
    const data = addStore(initialState)

    expect(getStore({ storeKey: initialState.storeKey })).toEqual(initialState.storeData)

    expect(data).toEqual(initialState.storeData)
  })
  it('should remove store to the localStorage Store', () => {
    addStore(initialState)

    removeStore({ storeKey: initialState.storeKey })

    expect(getStore({ storeKey: initialState.storeKey })).toBeNull()
  })
  it('should get store to the localStorage Store', () => {
    addStore(initialState)

    expect(getStore({ storeKey: initialState.storeKey })).toEqual(initialState.storeData)
  })
  it('should update store data', () => {
    addStore(updatedStore)

    const newData = { test: 'test_string_2' }

    updateStore({ storeKey: updatedStore.storeKey, storeData: newData })

    const newStore = getStore({ storeKey: 'str' })

    expect(newStore).toEqual(newData)
  })
  it('should add to store "test" as new key with data to object', () => {
    addStore(addToObject)

    const newData = { test_new: 'string' }

    addToStore({ storeKey: addToObject.storeKey, storeData: newData })

    const newStore = getStore({ storeKey: addToObject.storeKey })

    expect(newStore).toEqual({ ...addToObject.storeData, ...newData })
  })
  it('should add to store "test" as new string to array', () => {
    addStore(addToArray)
    addToStore({ storeKey: addToArray.storeKey, storeData: 'test_2' })

    const newStore = getStore({ storeKey: addToArray.storeKey })

    expect(newStore).toEqual([addToArray.storeData[0], 'test_2'])
  })
  it('should remove string from the array store', () => {
    addStore(removeFromArrayString)
    removeFromStore({ storeKey: removeFromArrayString.storeKey, valMatch: removeFromArrayString.storeData[0] })

    const newStore = getStore({ storeKey: removeFromArrayString.storeKey })

    expect(newStore).toEqual([])
  })
  it('should remove key-value pair from the object store', () => {
    addStore(removeFromObject)
    removeFromStore({ storeKey: removeFromObject.storeKey, valID: 'test', valMatch: removeFromObject.storeData.test })

    const newStore = getStore({ storeKey: removeFromObject.storeKey })

    expect(newStore).toEqual({})
  })
  it('should remove object from the array store', () => {
    addStore(removeFromArray)
    removeFromStore({ storeKey: removeFromArray.storeKey, valID: 'test', valMatch: removeFromArray.storeData[1].test })

    const newStore = getStore({ storeKey: removeFromArray.storeKey })

    expect(newStore).toEqual([removeFromArray.storeData[0]])
  })
})
