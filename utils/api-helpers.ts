import { User, UserData } from 'types';

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

export const loadInitialUserId = async () => {
  const data = await fetch(`${process.env.BASE_URL}/api/users`, {
    cache: 'no-store',
  });
  const initialUserId: UserData['id'] = await data.json();

  return initialUserId;
};
