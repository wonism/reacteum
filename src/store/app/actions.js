/** @flow */
import { GET_PEOPLE } from './actionTypes';

type Action = {
  +type: string,
  +payload: {
    +id: string,
  },
};

export const getPeople = (id: string): Action => ({
  type: GET_PEOPLE,
  payload: {
    id,
  },
});
