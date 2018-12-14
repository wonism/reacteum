import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// components
import Anchor from '~/styled/Anchor';

storiesOf('Anchor', module)
  .add('with text', () => (
    <Anchor href="/">
      Anchor component with text
    </Anchor>
  ))
  .add('with emoji', () => (
    <Anchor href="/">
      ⚓ component with emoji
    </Anchor>
  ));
