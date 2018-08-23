/** @flow */
import { type Saga } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { get } from '~/store/api';
import { GET_PEOPLE, GET_PEOPLE_SUCCESS, GET_PEOPLE_FAILED } from './actionTypes';
import { type People } from './initialState';

export function* getPeople({ payload }: { payload: { id: string } }): Saga<void> {
  try {
    const response = yield call(get, `https://swapi.co/api/people/${payload.id}/`);

    if (response.ok) {
      const result: People = yield response.json();

      yield put({ type: GET_PEOPLE_SUCCESS, payload: { people: result } });
    } else {
      const contentType = response.headers.get('content-type');

      if (contentType && contentType.includes('application/json')) {
        const result = yield response.json();
        const { detail } = result;
        throw new Error(detail);
      } else {
        const result = yield response.text();
        throw new Error(result);
      }
    }
  } catch (e) {
    const error = e.message || e;
    yield put({ type: GET_PEOPLE_FAILED, payload: { error } });
  }
}

export default function* sagas(): Saga<void> {
  yield all([takeLatest(GET_PEOPLE, getPeople)]);
}
