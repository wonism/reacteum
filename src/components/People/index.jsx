import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';
// dumb components
import Detail from '~/components/People/Detail';
import List from '~/components/People/List';

const People = ({ match }) => (
  <>
    <Route exact path={match.url} render={() => <h1>Select People</h1>} />
    <Route path={`${match.url}/:id`} component={Detail} />
    {match.isExact ? (
      <>
        <Helmet>
          <title>Reacteum - Select People</title>
          <meta name="keyword" content="reacteum,react,react-helmet,styled-components" />
        </Helmet>
        <List />
      </>
    ) : null}
  </>
);

People.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
    isExact: PropTypes.bool.isRequired,
  }).isRequired,
};

export default People;
