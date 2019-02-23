import { createSelector } from 'reselect';

const getAppSubState = _ => _.app;

export const getVersion = createSelector(
  getAppSubState,
  _ => _.version
);

export const isRequested = createSelector(
  getAppSubState,
  _ => _.isRequested
);

export const getPeople = createSelector(
  getAppSubState,
  _ => _.people
);
