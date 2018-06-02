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
  describe('Common Edge Cases', () => {
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

    describe('Edge Cases - Get people', () => {
      test('Missing payload for will not break the reducer.', () => {
        expect(reducer(undefined, { type: actionTypes.GET_PEOPLE })).toEqual({
          app: state,
        });
      });

      test('Extra payload with will not break the reducer.', () => {
        expect(
          reducer(undefined, { type: actionTypes.GET_PEOPLE, extra: {} })
        ).toEqual({ app: state });
      });
    });

    describe('Normal Cases - Get people', () => {
      test('Reducer with `undefined` state should create state and be set by itself.', () => {
        expect(
          reducer(undefined, { type: actionTypes.GET_PEOPLE, people })
        ).toEqual({ app: state });
      });

      test('Reducer with empty state should create state and be set by itself.', () => {
        expect(reducer({}, { type: actionTypes.GET_PEOPLE, people })).toEqual({
          app: state,
        });
      });

      test('`isRequested`, `people` must be updated by reducer.', () => {
        expect(
          reducer(
            { app: { people: {}, isRequested: false } },
            { type: actionTypes.GET_PEOPLE, people }
          )
        ).toEqual({ app: state });
      });

      test('Reducer update only `isRequested`, `people` without side effect.', () => {
        expect(
          reducer(
            { app: { otherProp } },
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

    describe('Edge Cases - Get people success', () => {
      test('Missing payload for will not break the reducer.', () => {
        expect(
          reducer(undefined, { type: actionTypes.GET_PEOPLE_SUCCESS })
        ).toEqual({ app: { isRequested } });
      });

      test('Extra payload with will not break the reducer.', () => {
        expect(
          reducer(undefined, {
            type: actionTypes.GET_PEOPLE_SUCCESS,
            extra: {},
          })
        ).toEqual({ app: { isRequested } });
      });
    });

    describe('Normal Cases - Get people success', () => {
      test('Reducer with `undefined` state should create state and be set by itself.', () => {
        expect(
          reducer(undefined, { type: actionTypes.GET_PEOPLE_SUCCESS, payload })
        ).toEqual({ app: state });
      });

      test('Reducer with empty state should create state and be set by itself.', () => {
        expect(
          reducer({}, { type: actionTypes.GET_PEOPLE_SUCCESS, payload })
        ).toEqual({
          app: state,
        });
      });

      test('`isRequested`, `people` must be updated by reducer.', () => {
        expect(
          reducer(
            { app: { people: {}, isRequested: false } },
            { type: actionTypes.GET_PEOPLE_SUCCESS, payload }
          )
        ).toEqual({ app: state });
      });

      test('Reducer update only `isRequested`, `people` without side effect.', () => {
        expect(
          reducer(
            { app: { otherProp } },
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

    describe('Edge Cases - Get people', () => {
      test('Missing payload for will not break the reducer.', () => {
        expect(
          reducer(undefined, { type: actionTypes.GET_PEOPLE_FAILED })
        ).toEqual({ app: state });
      });

      test('Extra payload with will not break the reducer.', () => {
        expect(
          reducer(undefined, { type: actionTypes.GET_PEOPLE_FAILED, extra: {} })
        ).toEqual({ app: state });
      });
    });

    describe('Normal Cases - Get people', () => {
      test('Reducer with `undefined` state should create state and be set by itself.', () => {
        expect(
          reducer(undefined, { type: actionTypes.GET_PEOPLE_FAILED, people })
        ).toEqual({ app: state });
      });

      test('Reducer with empty state should create state and be set by itself.', () => {
        expect(
          reducer({}, { type: actionTypes.GET_PEOPLE_FAILED, people })
        ).toEqual({
          app: state,
        });
      });

      test('`isRequested`, `people` must be updated by reducer.', () => {
        expect(
          reducer(
            { app: { people: {}, isRequested: false } },
            { type: actionTypes.GET_PEOPLE_FAILED, people }
          )
        ).toEqual({ app: state });
      });

      test('Reducer update only `isRequested`, `people` without side effect.', () => {
        expect(
          reducer(
            { app: { otherProp } },
            { type: actionTypes.GET_PEOPLE_FAILED, people }
          )
        ).toEqual({ app: { ...state, otherProp } });
      });
    });
  }
});
