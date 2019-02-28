import React from 'react';
import { shape, string, node } from 'prop-types';
import { get } from '~/utils/api';
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

export const Context = React.createContext();

const Provider = ({ match, children }) => {
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

Provider.propTypes = {
  match: shape({
    params: shape({
      id: string.isRequired,
    }).isRequired,
  }).isRequired,
  children: node.isRequired,
};

export default Provider;
