import React from 'react';
import { shape, string } from 'prop-types';
import { Helmet } from 'react-helmet';
// context
import Provider, { Context } from '~/components/People/Detail/Provider';
// dumb components
import List from '~/components/People/List';
import Spinner from '~/styled/Spinner';

const Detail = ({ match }) => {
  const { isFetched, people, error } = React.useContext(Context);
  const { id } = match.params;

  return (
    <>
      <Helmet>
        <title>
          Reacteum - People #{id}
        </title>
        <meta name="keyword" content="reacteum,react,react-helmet,styled-components" />
      </Helmet>
      <h1>
        People #
        {id}
      </h1>
      <List />
      <>
        {isFetched ? (
          <Spinner />
        ) : (
          <>
            {people === null ? (
              <p>
                Hello, Skeleton!
              </p>
            ) : (
              <p>
                Hello, {people.name}!
              </p>
            )}
            {error === null ? null : (
              <p>
                Failed to fetch!ERROR
              </p>
            )}
          </>
        )}
      </>
    </>
  );
};

Detail.propTypes = {
  match: shape({
    params: shape({
      id: string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default props => (
  <Provider {...props}>
    <Detail {...props} />
  </Provider>
);
