import { User, UserData } from 'types';

type RequestParams = {
  userId: string;
  pageSize: number;
  query: string;
  page: number;
};

export const loadFilteredUserList = async ({
  pageSize,
  page,
  query,
  userId,
}: RequestParams) => {
  const data = await fetch(
    `${process.env.BASE_URL}/api/users/${userId}?query=${query}&page=${page}&pageSize=${pageSize}`,
    {
      cache: 'no-store',
    },
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
