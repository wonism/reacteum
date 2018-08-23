import { combineReducers } from 'redux';
import reducers from './reducers';
import * as actionTypes from './actionTypes';
import createReducer from '../../utils/createReducer';

const initialState = {};

const reducer = combineReducers({
  app: createReducer(reducers, initialState),
});

const otherProp = {};

describe('Reducers', () => {
  describe('Edge Cases', () => {
    test('`undefined` state with unsupported action should return initialState', () =>
      expect(reducer(undefined, { type: 'UNSUPPORTED_ACTION' })).toEqual({
        app: initialState,
      }));
    test('Any app substate should be returned as is if the action is unsupported', () =>
      expect(reducer({ app: {} }, { type: 'UNSUPPORTED_ACTION' })).toEqual({
        app: initialState,
      }));
  });

  {
    const isRequested = true;
    const people = null;
    const state = {
      isRequested,
      people,
    };

    describe('Get people', () => {
      test('`isRequested`, `people` must be updated by reducer.', () => {
        expect(
          reducer(
            { app: { people: { name: 'Jane Doe' }, isRequested: false } },
            { type: actionTypes.GET_PEOPLE, people }
          )
        ).toEqual({ app: state });
      });

      test('Reducer update only `isRequested`, `people` without side effect.', () => {
        expect(
          reducer(
            { app: { ...state, otherProp } },
            { type: actionTypes.GET_PEOPLE, people }
          )
        ).toEqual({ app: { ...state, otherProp } });
      });
    });
  }

  {
    const isRequested = false;
    const people = { name: 'John Doe' };
    const payload = { people };
    const state = {
      isRequested,
      people,
    };

    describe('Get people success', () => {
      test('`isRequested`, `people` must be updated by reducer.', () => {
        expect(
          reducer(
            { app: { ...state, people: null, isRequested: true } },
            { type: actionTypes.GET_PEOPLE_SUCCESS, payload }
          )
        ).toEqual({ app: state });
      });

      test('Reducer update only `isRequested`, `people` without side effect.', () => {
        expect(
          reducer(
            { app: { ...state, otherProp } },
            { type: actionTypes.GET_PEOPLE_SUCCESS, payload }
          )
        ).toEqual({ app: { ...state, otherProp } });
      });
    });
  }

  {
    const isRequested = false;
    const people = null;
    const state = {
      isRequested,
      people,
    };

    describe('Get people Failed', () => {
      test('`isRequested` must be updated by reducer.', () => {
        expect(
          reducer(
            { app: { ...state, isRequested: true } },
            { type: actionTypes.GET_PEOPLE_FAILED }
          )
        ).toEqual({ app: state });
      });

      test('Reducer update only `isRequested` without side effect.', () => {
        expect(
          reducer(
            { app: { ...state, otherProp } },
            { type: actionTypes.GET_PEOPLE_FAILED }
          )
        ).toEqual({ app: { ...state, otherProp } });
      });
    });
  }
});
