/** @jsx createElement */
/** @flow */
import { createElement, Fragment, type Fragment as FragmentType } from 'react';
import { Helmet } from 'react-helmet';

const NoMatch = (): FragmentType => (
  <Fragment>
    <Helmet>
      <title>Reacteum - 404 Page Not Found</title>
      <meta name="keyword" content="reacteum,react,redux,redux-saga,react-helmet,emotion" />
    </Helmet>
    <h1>Page Not Found</h1>
  </Fragment>
);

export default NoMatch;
