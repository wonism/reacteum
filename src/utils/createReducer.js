/** @flow */
const createReducer = (reducers: Object = {}, initialState: Object = {}) => (state: Object = initialState, { type, ...action }: { type: string }) =>
  ({}.hasOwnProperty.call(reducers, type) ? reducers[type](state, action) : state);

export default createReducer;
