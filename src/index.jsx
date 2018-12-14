/** @flow */
import React, { type Element, type Fragment } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import {
  Home,
  People,
  NoMatch,
} from '~/pages';
import { bodyStyles } from '~/constants';

const root = global.document.getElementById('app-root');
const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }
`;

const App = (): Element<Fragment> => (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/people" component={People} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
    <GlobalStyle />
  </>
);

render(<App />, root);

export default App;
