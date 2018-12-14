import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';
// components
import Spinner from '~/styled/Spinner';

storiesOf('Spinner', module)
  .add('default color', () => (
    <Spinner />
  ))
  .add('customizable color', () => {
    const color = text('color', 'yellow');

    return (
      <Spinner color={color} />
    );
  });
