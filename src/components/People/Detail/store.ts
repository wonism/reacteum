interface People {
  name: string;
};

interface State {
  isFetched: boolean;
  people: People | null;
  error?: string;
};

// initial state
export const initialState: State = {
  isFetched: false,
  people: null,
  error: null,
};

// action types
enum Actions {
  FETCH_PEOPLE = 'FETCH_PEOPLE',
  FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS',
  FETCH_PEOPLE_FAILED = 'FETCH_PEOPLE_FAILED',
};

export const FETCH_PEOPLE = Actions.FETCH_PEOPLE;
export const FETCH_PEOPLE_SUCCESS = Actions.FETCH_PEOPLE_SUCCESS;
export const FETCH_PEOPLE_FAILED = Actions.FETCH_PEOPLE_FAILED;

type Action =
  | { type: Actions.FETCH_PEOPLE }
  | { type: Actions.FETCH_PEOPLE_SUCCESS, people: People }
  | { type: Actions.FETCH_PEOPLE_FAILED, error: string };

// reducer
export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case FETCH_PEOPLE:
      return {
        ...state,
        isFetched: true,
        people: null,
        error: null,
      };
    case FETCH_PEOPLE_SUCCESS:
      const { people } = action;

      return {
        ...state,
        isFetched: false,
        people,
      };
    case FETCH_PEOPLE_FAILED:
      const { error } = action;

      return {
        ...state,
        isFetched: false,
        error,
      };
    default:
      return state;
  }
};
