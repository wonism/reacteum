import appState from './initialState';
import { getVersion, isRequested, getPeople } from './selectors';

const initialState = { app: appState };

describe('Get version', () => {
  describe('Initial Cases', () => {
    test('Initial State', () =>
      expect(getVersion(initialState)).toEqual(appState.version));
  });

  describe('Normal Cases', () => {
    test('Get version - 1', () =>
      expect(getVersion({ app: { version: '1.0.0' } })).toEqual('1.0.0'));
    test('Get version - 2', () =>
      expect(getVersion({ app: { version: '1.0.2' } })).toEqual('1.0.2'));
    test('Get version - 3', () =>
      expect(getVersion({ app: { version: '12.3.456' } })).toEqual('12.3.456'));
  });
});

describe('Is requested?', () => {
  describe('Initial Cases', () => {
    test('Initial State', () =>
      expect(isRequested(initialState)).toEqual(appState.isRequested));
  });

  describe('Normal Cases', () => {
    test('Is requested? - true', () =>
      expect(isRequested({ app: { isRequested: true } })).toEqual(true));
    test('Is requested? - false', () =>
      expect(isRequested({ app: { isRequested: false } })).toEqual(false));
  });
});

describe('Get people', () => {
  describe('Initial Cases', () => {
    test('Initial State', () =>
      expect(getPeople(initialState)).toEqual(appState.people));
  });

  describe('Normal Cases', () => {
    test('Get people', () =>
      expect(getPeople({ app: { people: { name: 'Skywalker' } } })).toEqual({
        name: 'Skywalker',
      }));
  });
});
