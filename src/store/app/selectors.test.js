import { getVersion, isRequested, getPeople } from './selectors';

describe('Get version', () => {
  describe('Edge Cases', () => {
    test('Null State', () => expect(getVersion(null)).toEqual(undefined));
    test('No app in State', () => expect(getVersion({})).toEqual(undefined));
    test('Null app State', () =>
      expect(getVersion({ app: null })).toEqual(undefined));
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
  describe('Edge Cases', () => {
    test('Null State', () => expect(isRequested(null)).toEqual(undefined));
    test('No app in State', () => expect(isRequested({})).toEqual(undefined));
    test('Null app State', () =>
      expect(isRequested({ app: null })).toEqual(undefined));
  });

  describe('Normal Cases', () => {
    test('Is requested? - true', () =>
      expect(isRequested({ app: { isRequested: true } })).toEqual(true));
    test('Is requested? - false', () =>
      expect(isRequested({ app: { isRequested: false } })).toEqual(false));
  });
});

describe('Get people', () => {
  describe('Edge Cases', () => {
    test('Null State', () => expect(getPeople(null)).toEqual(undefined));
    test('No app in State', () => expect(getPeople({})).toEqual(undefined));
    test('Null app State', () =>
      expect(getPeople({ app: null })).toEqual(undefined));
  });

  describe('Normal Cases', () => {
    test('Get people', () =>
      expect(getPeople({ app: { people: { name: 'Skywalker' } } })).toEqual({
        name: 'Skywalker',
      }));
  });
});
