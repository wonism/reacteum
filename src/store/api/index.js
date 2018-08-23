/** @flow */
const headers: { Accept: string, 'Content-Type': string } = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

type Response = {
  ok: boolean,
  headers: Headers,
};

type FetchResult = Promise<Response>;

export const get = (url: string, options: ?Object): FetchResult =>
  fetch(url, {
    method: 'GET',
    headers,
    ...options,
  });

export const post = (url: string, options: ?Object): FetchResult =>
  fetch(url, {
    method: 'POST',
    headers,
    ...options,
  });
