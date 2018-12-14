import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// components
import Link from '~/styled/Link';

storiesOf('Link', module)
  .add('with text', () => (
    <Router>
      <Link to="/">
        Link component with text
      </Link>
    </Router>
  ))
  .add('with emoji', () => (
    <Router>
      <Link to="/">
        Link component with emoji 😀
      </Link>
    </Router>
  ));
