export const getUsers = async (limit) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?_limit=${limit}`
  );
  return res.json();
};
