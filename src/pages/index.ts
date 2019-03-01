import { asyncComponent } from 'react-async-component';

// Home
export const Home = asyncComponent({
  resolve: () => import('./Home'),
});
// People
export const People = asyncComponent({
  resolve: () => import('./People'),
});
// 404
export const NoMatch = asyncComponent({
  resolve: () => import('./NoMatch'),
});
