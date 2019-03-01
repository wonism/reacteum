import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Route, match } from 'react-router-dom';
// dumb components
import Detail from 'components/People/Detail';
import List from 'components/People/List';

interface Props {
  match: match;
  children: React.ReactNode;
};

const People: React.FC = ({ match }: Props) => (
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

export default People;
