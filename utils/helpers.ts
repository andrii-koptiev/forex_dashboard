import { User } from 'types';

export const loadUserList = async () => {
  const data = await fetch(`${process.env.BASE_URL}/api/users`);
  const users: User[] = await data.json();

  return users;
};

export const loadFilteredUserList = async (
  userId: string,
  query: string,
  page: number,
) => {
  const data = await fetch(
    `${process.env.BASE_URL}/api/users/${userId}?query=${query}&page=${page}`,
  );
  const users: User[] = await data.json();

  return users;
};
