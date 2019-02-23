const createReducer = (reducers, initialState) => (state = initialState, { type, ...action }) => {
  if (!{}.hasOwnProperty.call(reducers, type)) {
    return state;
  }

  return reducers[type](state, action);
};

export default createReducer;
