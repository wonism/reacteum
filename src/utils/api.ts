interface Headers {
  Accept: string;
  "Content-Type": string;
};

const headers: Headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const get = (url: string, options: any): Promise<Response> => fetch(
    url,
    {
      method: "GET",
      headers,
      ...options,
    }
  );

export const post = (url: string, options: any): Promise<Response> => fetch(
    url,
    {
      method: "POST",
      headers,
      ...options,
    }
  );
