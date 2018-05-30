import { createSelector } from 'reselect';
import { get } from 'lodash/fp';

const getAppSubState = get('app');

export const getVersion = createSelector(
  getAppSubState,
  get('version')
);

export const isRequested = createSelector(
  getAppSubState,
  get('isRequested')
);

export const getPeople = createSelector(
  getAppSubState,
  get('people')
);
