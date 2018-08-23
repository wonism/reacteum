/** @flow */
import { version } from '_/package.json';

export type People = ?{ +name: string };

export type State = {
  +version: string,
  +isRequested: boolean,
  +people: People,
};

export default {
  version,
  isRequested: false,
  people: null,
};
