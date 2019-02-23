import { GET_PEOPLE } from './actionTypes';

export const getPeople = id => ({
  type: GET_PEOPLE,
  payload: {
    id,
  },
});
