/** @flow */
import update from 'immutability-helper';
import { GET_PEOPLE, GET_PEOPLE_SUCCESS, GET_PEOPLE_FAILED } from './actionTypes';
import { type State, type People } from './initialState';

export default {
  [GET_PEOPLE]: (state: State): State => {
    const newState = update(state, {
      isRequested: {
        $set: true,
      },
      people: {
        $set: null,
      },
    });

    return newState;
  },
  [GET_PEOPLE_SUCCESS]: (state: State, { payload }: { payload: { people: People } }): State => {
    const newState = update(state, {
      isRequested: {
        $set: false,
      },
      people: {
        $set: payload.people,
      },
    });

    return newState;
  },
  [GET_PEOPLE_FAILED]: (state: State): State => {
    const newState = update(state, {
      isRequested: {
        $set: false,
      },
    });

    return newState;
  },
};
