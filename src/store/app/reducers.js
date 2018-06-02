import { flow, set, get } from 'lodash/fp';
import { GET_PEOPLE, GET_PEOPLE_SUCCESS, GET_PEOPLE_FAILED } from './actionTypes';

export default {
  [GET_PEOPLE]: flow(
    set('isRequested', true),
    set('people', null)
  ),
  [GET_PEOPLE_SUCCESS]: (state, { payload }) =>
    flow(
      set('isRequested', false),
      set('people', get('people')(payload))
    )(state),
  [GET_PEOPLE_FAILED]: flow(
    set('isRequested', false),
    set('people', null)
  ),
};
