import { takeLatest } from 'redux-saga/effects';
import sentMessage from './sentMessage';
import { SENT_MESSAGE } from '../../constants';

export default function* watchSagas() {
  yield takeLatest(SENT_MESSAGE, sentMessage);
}
