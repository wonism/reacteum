import React from 'react';
import { renderHook, cleanup, act } from 'react-hooks-testing-library';
import { Context } from './Provider';
import {
  // initial state
  initialState,
  // action types
  FETCH_PEOPLE,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILED,
  // reducer
  reducer,
} from './store';

global.fetch = require('jest-fetch-mock');

describe('useReducer tests', () => {
  afterEach(cleanup);

  test('fetch people - success', () => {
    const { result } = renderHook(() => React.useReducer(reducer, initialState));
    const [state, dispatch] = result.current;

    expect(state).toEqual(initialState);
    act(() => dispatch({ type: FETCH_PEOPLE }));

    const [state2] = result.current;

    expect(state2).toEqual({ ...initialState, isFetched: true });

    const people = { name: 'John Doe' };

    act(() => dispatch({ type: FETCH_PEOPLE_SUCCESS, people }));

    const [state3] = result.current;

    expect(state3).toEqual({ ...state2, isFetched: false, people });
  });

  test('fetch people - failed', () => {
    const { result } = renderHook(() => React.useReducer(reducer, initialState));
    const [state, dispatch] = result.current;

    expect(state).toEqual(initialState);
    act(() => dispatch({ type: FETCH_PEOPLE }));

    const [state2] = result.current;

    expect(state2).toEqual({ ...initialState, isFetched: true });

    const error = 'Failed to fetch';

    act(() => dispatch({ type: FETCH_PEOPLE_FAILED, error }));

    const [state3] = result.current;

    expect(state3).toEqual({ ...state2, isFetched: false, error });
  });
});

describe('useContext tests', () => {
  afterEach(cleanup);

  test('should get default value from context', () => {
    const { result } = renderHook(() => React.useContext(Context));

    const value = result.current;

    expect(value).toBe(undefined);
  });

  test('should get value from context', () => {
    const { result: { current: [state] }} = renderHook(() => React.useReducer(reducer, initialState));
    const wrapper = ({ children }) => (
      <Context.Provider value={state}>{children}</Context.Provider>
    );
    const { result } = renderHook(() => React.useContext(Context), { wrapper });
    const value = result.current;

    expect(value).toBe(initialState);
  });
});
