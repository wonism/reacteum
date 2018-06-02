import configureMockStore from 'redux-mock-store';
import * as actions from './actions';
import * as actionTypes from './actionTypes';

const middlewares = [];
const mockStore = configureMockStore(middlewares);

describe('Actions for app duck store', () => {
  it(actionTypes.GET_PEOPLE, () => {
    const id = '1';
    const payload = { id };
    const store = mockStore({});
    const expectedAction = {
      type: actionTypes.GET_PEOPLE,
      payload,
    };
    const result = store.dispatch(actions.getPeople(id));

    expect(result).toEqual(expectedAction);
  });
});
