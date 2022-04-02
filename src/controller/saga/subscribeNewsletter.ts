import { put } from 'redux-saga/effects';
import getState from '../helpers/getState';
import fetchUrl from '../../utils/fetchUrl';
import { IStore } from '../../interfaces/IStore';
import getServerURL from '../helpers/endpoints';

import { requestSuccess, requestError, newsletterSubscriptionSaved, newsletterSubscribeError } from '../actions';

function* subscribeNewsletter() {
  const { app }: IStore = yield getState();
  let payload = null;

  try {
    payload = yield fetchUrl(`${getServerURL()}/api/subscribe-newsletter`, {
      email: app.subscribeNewsletter.userEmail
    });
    console.log(payload, 'payload');

    if (payload.error) {
      yield put(newsletterSubscribeError(payload));
      yield put(requestError(payload.error));

      return;
    }

    yield put(newsletterSubscriptionSaved(payload));
    yield put(requestSuccess('Thank you! You\'ve been subscribed successfully'));
  } catch (e) {
    console.error('Error: ', e, 'Payload: ', payload);

    yield put(newsletterSubscribeError(null));
    yield put(requestError('Some error happen newsletter subscription. Please try again later'));
  }
}

export default subscribeNewsletter;
