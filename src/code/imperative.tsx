export const getPosts = async () => {
  const url = `http://localhost:4000/posts`;

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const options = {
    method: 'GET',
    headers,
  };

  const response = await fetch(url, options);

  return await response.json();
};
