import * as React from 'react';
import { Route, match } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// context
import Provider, { Context } from 'components/People/Detail/Provider';
// dumb components
import List from 'components/People/List';
import Spinner from 'styled/Spinner';

interface Props {
  match: match & {
    params: {
      id: string;
    };
  };
  children?: React.ReactNode;
};

const Detail: React.FC = ({ match }: Props) => {
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
                Failed to fetch!
              </p>
            )}
          </>
        )}
      </>
    </>
  );
};

export default (props: Props) => (
  <Provider {...props}>
    <Detail {...props} />
  </Provider>
);
