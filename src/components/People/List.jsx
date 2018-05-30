import React from 'react';
import { flow, range, map } from 'lodash/fp';
import Link from '~/styled/Link';

const List = () => (
  <ul>
    {flow(
      range,
      map(id => (
        <li key={id}>
          <Link to={`/people/${id}`}>People #{id}</Link>
        </li>
      ))
    )(1, 5)}
  </ul>
);

export default List;
