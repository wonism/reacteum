import update from 'immutability-helper';
import { GET_PEOPLE, GET_PEOPLE_SUCCESS, GET_PEOPLE_FAILED } from './actionTypes';

export default {
  [GET_PEOPLE]: (state) => {
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
  [GET_PEOPLE_SUCCESS]: (state, { payload }) => {
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
  [GET_PEOPLE_FAILED]: (state) => {
    const newState = update(state, {
      isRequested: {
        $set: false,
      },
    });

    return newState;
  },
};
