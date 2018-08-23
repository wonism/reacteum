/** @flow */
import { INIT_APP } from './actionTypes';
import { type State } from './initialState';

export default (store: { dispatch: (action: { type: string }) => State, getState: () => State }) => {
  const { dispatch, getState } = store;
  const state = getState();

  dispatch({ type: INIT_APP, state });

  return store;
};
