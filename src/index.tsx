import * as React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { bodyStyles } from 'constants';
import {
  Home,
  People,
  NoMatch,
} from 'pages';

const root: Element = document.getElementById('app-root');
const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }
`;

const App: React.FC = () => (
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
