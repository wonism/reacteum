/** @flow */
import { createSelector } from 'reselect';
import type { State, People } from './initialState';

const getAppSubState = (_): State => _.app;

export const getVersion = createSelector(getAppSubState, (_: State): string => _.version);

export const isRequested = createSelector(getAppSubState, (_: State): boolean => _.isRequested);

export const getPeople = createSelector(getAppSubState, (_: State): People => _.people);
