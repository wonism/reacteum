/** @flow */
import { INIT_APP } from './actionTypes';

export default (store) => {
  const { dispatch, getState } = store;
  const state = getState();

  dispatch({ type: INIT_APP, state });

  return store;
};
