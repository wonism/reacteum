import { flow, set } from 'lodash/fp';
import {
  GET_PEOPLE,
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE_FAILED,
} from './actionTypes';

export default {
  [GET_PEOPLE]: flow(
    set('isRequested', true),
    set('people', null),
  ),
  [GET_PEOPLE_SUCCESS]: (state, { payload }) => flow(
    set('isRequested', false),
    set('people', payload.people),
  )(state),
  [GET_PEOPLE_FAILED]: flow(
    set('isRequested', false),
    set('people', null),
  ),
};
