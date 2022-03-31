import LocalStorageManager from '../../utils/localStorageManager'

const { addStore, addToStore, updateStore, getStore } = new LocalStorageManager()

const isStorePresent = getStore({ storeKey: 'chat-data' })
const isInputDataPresent = getStore({ storeKey: 'chat-current-input' })

if (!isStorePresent) {
  addStore({ storeKey: 'chat-data', storeData: [] })
}

if (!isInputDataPresent) {
  addStore({ storeKey: 'chat-current-input', storeData: '' })
}

export { addToStore, updateStore, getStore }
