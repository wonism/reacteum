import asyncComponent from '~/utils/asyncComponent';

// Home
export const Home = asyncComponent(() => import('./Home'));
// People
export const People = asyncComponent(() => import('./People'));
// 404
export const NoMatch = asyncComponent(() => import('./NoMatch'));
