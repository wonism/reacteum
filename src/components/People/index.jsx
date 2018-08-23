/** @jsx createElement */
/** @flow */
import { createElement, Fragment, type Fragment as FragmentType } from 'react';
import { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';
import Detail from '~/containers/People/Detail';
import List from './List';

export type Props = {
  match: {
    url: string,
    isExact: boolean,
  },
};

const People = ({ match }: Props): FragmentType => (
  <Fragment>
    <Route exact path={match.url} render={() => <h1>Select People</h1>} />
    <Route path={`${match.url}/:id`} component={Detail} />
    {match.isExact ? (
      <div>
        <Helmet>
          <title>Reacteum - Select People</title>
          <meta name="keyword" content="reacteum,react,redux,redux-saga,react-helmet,emotion" />
        </Helmet>
        <List match={match} />
      </div>
    ) : null}
  </Fragment>
);

export default People;
