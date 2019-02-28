const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const get = (url, options, timeout = 5000) => fetch(
    url,
    {
      method: "GET",
      headers,
      ...options,
    },
    timeout
  );

export const post = (url, options, timeout = 5000) => fetch(
    url,
    {
      method: "POST",
      headers,
      ...options,
    },
    timeout
  );
