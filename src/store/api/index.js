const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const get = (url, options) => fetch(url, {
    method: 'GET',
    headers,
    ...options,
  });

export const post = (url, options) => fetch(url, {
    method: 'POST',
    headers,
    ...options,
  });
