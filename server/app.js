import React from 'react';
import { StaticRouter as Router, Route, Switch } from 'react-router-dom';
/* pages */
import Home from '~/pages/Home';
import People from '~/pages/People';
import NoMatch from '~/pages/NoMatch';

const App = ({ location, context }) => (
  <Router location={location} context={context}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/people" component={People} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

export default App;
