/** @flow */
import { type Saga } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import appSagas from './app/sagas';

export default function* sagas(): Saga<void> {
  yield all([fork(appSagas)]);
}
