import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
/* app/store */
import appInitialState from '~/store/app/initialState';
import appReducers from '~/store/app/reducers';
import appInitializer from '~/store/app/initializer';
/* sagas */
import sagas from '~/store/sagas';
/* history */
import history from '~/store/history';
/* utils */
import createReducer from '~/utils/createReducer';
import pipe from '~/utils/pipe';

const isProduction = process.env.NODE_ENV === 'production';

const composeEnhancers = isProduction ?
  compose :
  global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || require('redux-devtools-extension').composeWithDevTools;

const initialState = {
  app: appInitialState,
};

const reducers = combineReducers({
  app: createReducer(appReducers, appInitialState),
  routing: routerReducer,
});

const initializeStore = pipe(
  appInitializer,
);

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
  routerMiddleware(history),
  (isProduction ? null : null),
].filter(_ => _);

const middleware = applyMiddleware.apply(null, middlewares);
const createStoreWithMiddleware = composeEnhancers(middleware)(createStore);
const store = createStoreWithMiddleware(reducers, initialState);

sagaMiddleware.run(sagas);

export default initializeStore(store);