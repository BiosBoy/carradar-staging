import { takeLatest } from 'redux-saga/effects';

import subscribeNewsletter from './subscribeNewsletter';
import { NEWSLETTER_ATTEMPT } from '../../constants';

export default function* watchSagas() {
  yield takeLatest(NEWSLETTER_ATTEMPT, subscribeNewsletter);
}
