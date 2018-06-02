import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { get } from '../api';
import * as sagas from './sagas';
import * as actionTypes from './actionTypes';

describe('Get people', () => {
  const payload = { id: 1 };
  const generator = cloneableGenerator(sagas.getPeople)({ payload });

  test('Get people successfully', () => {
    const clone = generator.clone();

    const people = { name: 'John Doe' };
    const response = {
      ok: true,
      json: () => ({ people }),
    };

    expect(clone.next().value).toEqual(
      call(get, `https://swapi.co/api/people/${payload.id}/`)
    );
    expect(clone.next(response).value).toEqual({ people });
    expect(clone.next(people).value).toEqual(
      put({ type: actionTypes.GET_PEOPLE_SUCCESS, payload: { people } })
    );
    expect(clone.next().done).toEqual(true);
  });

  test('Failed to get people - result is json', () => {
    const clone = generator.clone();

    const detail = 'Not found';
    const error = { detail };
    const response = {
      ok: false,
      headers: {
        get: () => 'application/json',
      },
      json: () => error,
    };

    expect(clone.next().value).toEqual(
      call(get, `https://swapi.co/api/people/${payload.id}/`)
    );
    expect(clone.next(response).value).toEqual(error);
    expect(clone.next(error).value).toEqual(
      put({ type: actionTypes.GET_PEOPLE_FAILED, payload: { error: detail } })
    );
    expect(clone.next().done).toEqual(true);
  });

  test('Failed to get people - result is text', () => {
    const clone = generator.clone();

    const detail = 'Not found';
    const response = {
      ok: false,
      headers: {
        get: () => 'text/html',
      },
      text: () => detail,
    };

    expect(clone.next().value).toEqual(
      call(get, `https://swapi.co/api/people/${payload.id}/`)
    );
    expect(clone.next(response).value).toEqual(detail);
    expect(clone.next(detail).value).toEqual(
      put({
        type: actionTypes.GET_PEOPLE_FAILED,
        payload: { error: detail },
      })
    );
    expect(clone.next().done).toEqual(true);
  });
});
