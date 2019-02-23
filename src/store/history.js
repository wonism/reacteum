import createHistory from 'history/createBrowserHistory';
import qs from 'qs';

const history = createHistory();

history.location = {
  ...history.location,
  query: qs.parse(history.location.search.substr(1)),
};

history.listen(() => {
  history.location = {
    ...history.location,
    query: qs.parse(history.location.search.substr(1)),
  };
});

export default history;
