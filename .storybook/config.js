import React, { createElement, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
// storybook
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
// storybook addons
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { configureA11y, checkA11y } from '@storybook/addon-a11y';
// constants
import { bodyStyles } from '~/constants';

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

const a11yOptions = {};
configureA11y(a11yOptions);

const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }
`;

const Wrapper = styled.div`
  padding: 10px;
`;

addDecorator(story => (
  <>
    <Wrapper>
      {story()}
    </Wrapper>
    <GlobalStyle />
  </>
));
addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator(checkA11y);
addDecorator(withBackgrounds([
  { name: 'light', value: '#f2f2f2', default: true },
  { name: 'dark', value: '#3C4556' },
]));

setOptions({
  name: 'reacteum',
  url: 'https://github.com/wonism/reacteum',
});

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
