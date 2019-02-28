// initial state
export const initialState = {
  people: null,
  isFetched: false,
  error: null,
};

// action types
export const FETCH_PEOPLE = "FETCH_PEOPLE";
export const FETCH_PEOPLE_SUCCESS = "FETCH_PEOPLE_SUCCESS";
export const FETCH_PEOPLE_FAILED = "FETCH_PEOPLE_FAILED";

// reducer
export const reducer = (state = initialState, { type, people, error }) => {
  switch (type) {
    case FETCH_PEOPLE:
      return {
        ...state,
        isFetched: true,
        people: null,
        error: null,
      };
    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        isFetched: false,
        people,
      };
    case FETCH_PEOPLE_FAILED:
      return {
        ...state,
        isFetched: false,
        error,
      };
    default:
      return state;
  }
};
