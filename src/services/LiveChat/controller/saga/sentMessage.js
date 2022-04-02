import { put } from 'redux-saga/effects';
import { connectionError } from '../actions';
import { updateStore, getStore } from '../helpers/localStorage';
import setErrorMessage from '../../utils/setErrorMessage';

export function* saga({ text }) {
  updateStore({ storeKey: 'chat-current-input', storeData: '' }); // TODO: it's a little hack, should n't be here

  const data = {
    content: text,
    chatroom_id: 0,
    commit: 'send',
    authenticity_token: 'kpQmqOMt4UUJl/m15yNAbzPfD5Q2C2Ylg86tPVR5jFdJt+RDDxvKr+OZNdutf4EY/7GfCUggk3+O30rozaQfAA=='
  };

  try {
    const config = {
      method: 'post',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    };

    if (data) {
      config.body = new FormData();

      Object.keys(data).forEach((key) => {
        const type = typeof data[key];

        if (['number', 'string'].includes(type)) {
          config.body.append(key, data[key]);
        } else {
          config.body.append(key, JSON.stringify(data[key]));
        }
      });
    }

    const payload = yield fetch('/chatagent', config);

    console.log(payload, 'REST payload');

    if (payload.status !== 200) {
      yield put(connectionError());
      updateStore({ storeKey: 'chat-data', storeData: setErrorMessage(getStore({ storeKey: 'chat-data' })) });

      console.error('Some error happen during connection to the server', payload);

      return;
    }

    if (!payload || payload.error) {
      yield put(connectionError());
      updateStore({ storeKey: 'chat-data', storeData: setErrorMessage(getStore({ storeKey: 'chat-data' })) });

      throw new Error(`Error in payload! ${payload}`);
    }
  } catch (error) {
    yield put(connectionError());
    updateStore({ storeKey: 'chat-data', storeData: setErrorMessage(getStore({ storeKey: 'chat-data' })) });

    throw new Error(`Some error in sagas occured! ${error}`);
  }
}

export default saga;
