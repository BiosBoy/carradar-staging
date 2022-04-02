import LocalStorageManager from '../../../LiveChat/utils/localStorageManager';

const { addStore, addToStore, updateStore, getStore } = new LocalStorageManager();

const isStorePresent = getStore({ storeKey: 'gdpr' });

if (!isStorePresent) {
  addStore({ storeKey: 'gdpr', storeData: false });
}

export { addToStore, updateStore, getStore };
