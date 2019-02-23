import React from 'react';
import Link from '~/styled/Link';

const List = () => (
  <ul>
    {[1, 2, 3, 4, 5].map(id => (
      <li key={id}>
        <Link to={`/people/${id}`}>
          People #
          {id}
        </Link>
      </li>
    ))}
  </ul>
);

export default List;
