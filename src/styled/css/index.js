/** @flow */
import { css } from 'styled-components';

export const anchorStyle: any = css`
  cursor: pointer;

  &,
  &:link,
  &:visited,
  &:active {
    color: #999;
  }

  &:hover {
    color: #e59;
  }
`;
