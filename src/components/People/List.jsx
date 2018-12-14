/** @flow */
import React, { type Element } from 'react';
import Link from '~/styled/Link';

const List = (): Element<'ul'> => (
  <ul>
    {[1, 2, 3, 4, 5].map((id: number): Element<'li'> => (
      <li key={id}>
        <Link to={`/people/${id}`}>People #{id}</Link>
      </li>
    ))}
  </ul>
);

export default List;
