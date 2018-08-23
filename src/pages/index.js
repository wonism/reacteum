/** @flow */
import asyncComponent from '~/utils/asyncComponent';
import { ComponentType } from '~/types';

type ResolveType = {
  default: ComponentType,
};

// Home
export const Home = asyncComponent((): Promise<ResolveType> => import('./Home'));
// People
export const People = asyncComponent((): Promise<ResolveType> => import('./People'));
// 404
export const NoMatch = asyncComponent((): Promise<ResolveType> => import('./NoMatch'));
