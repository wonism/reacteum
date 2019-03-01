import * as React from 'react';
import Header from 'styled/Header';
import Link from 'styled/Link';
import List from 'styled/List';

const Gnb: React.FC = () => (
  <Header>
    <nav>
      <List>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/404">404</Link>
        </li>
      </List>
    </nav>
  </Header>
);

export default Gnb;
