import * as React from 'react';
import { match } from 'react-router-dom';
import { get } from 'utils/api';
import {
  // initial state
  initialState,
  // action types
  FETCH_PEOPLE,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILED,
  // reducer
  reducer,
} from './store';

export const Context = React.createContext(null);

interface Props {
  match: match & {
    params: {
      id: string;
    };
  };
  children: React.ReactNode;
};

const Provider: React.FC = ({ match, children }: Props) => {
  const [{ isFetched, people, error }, dispatch] = React.useReducer(reducer, initialState);
  const { id } = match.params;

  React.useEffect(() => {
    async function getPeople() {
      try {
        dispatch({ type: FETCH_PEOPLE });

        const response = await get(`https://swapi.co/api/people/${id}/`, { 'Access-Control-Allow-Origin': '*' });

        if (response.ok) {
          const people = await response.json();

          dispatch({ type: FETCH_PEOPLE_SUCCESS, people });
        } else {
          const contentType = response.headers.get('content-type');

          if (contentType && contentType.includes('application/json')) {
            const result = await response.json();
            const { detail } = result;

            throw new Error(detail);
          } else {
            const result = await response.text();

            throw new Error(result);
          }
        }
      } catch (e) {
        dispatch({ type: FETCH_PEOPLE_FAILED, error: e.message || e });
      }
    }

    getPeople();
  }, [id]);

  return (
    <Context.Provider value={{ isFetched, people, error }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
