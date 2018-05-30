import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { css } from 'emotion';
import {
  Home,
  People,
  NoMatch,
} from '~/pages';

const root = global.document.getElementById('app-root');

const globalStyle = css`
  margin: 0;
  box-sizing: border-box;

  * {
    box-sizing: border-box;
    &:before,
    &:after {
      box-sizing: border-box;
    }
  }
`;
global.document.body.classList.add(globalStyle);

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/people" component={People} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

render(<App />, root);
