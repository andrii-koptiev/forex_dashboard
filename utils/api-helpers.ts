import { SearchParamsEnum } from 'enums';
import { User, UserData } from 'types';

type RequestParams = {
  userId: string;
  pageSize: string;
  page: string;
  query?: string;
  sortBy?: string;
  sortOrder?: string;
};

type ApiResponce = {
  users: User[];
  pagination: {
    buttons: number[];
    totalUsers: number;
    displayedInfo: number[];
  };
};

export const loadFilteredUserList = async ({
  userId,
  pageSize,
  page,
  query,
  sortBy,
  sortOrder,
}: RequestParams) => {
  let url = `${process.env.BASE_URL}/api/users/${userId}?${SearchParamsEnum.PAGE}=${page}&${SearchParamsEnum.PAGE_SIZE}=${pageSize}`;

  if (query !== undefined) {
    url += `&${SearchParamsEnum.QUERY}=${query}`;
  }

  if (sortBy !== undefined) {
    url += `&${SearchParamsEnum.SORT_BY}=${sortBy}`;
  }

  if (sortOrder !== undefined) {
    url += `&${SearchParamsEnum.SORT_ORDER}=${sortOrder}`;
  }

  const res = await fetch(url, {
    cache: 'no-store',
  });
  const data: ApiResponce = await res.json();

  return data;
};


export const loadInitialUserId = async () => {
  const data = await fetch(`${process.env.BASE_URL}/api/users`, {
    cache: 'no-store',
  });
  const initialUserId: UserData['id'] = await data.json();

  return initialUserId;
};
