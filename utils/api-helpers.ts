import { SearchParamsEnum } from 'enums';
import {
  FilteredUsersResponse,
  HomePageResponse,
  SelectedUserResponse,
} from 'types/api';

type RequestParams = {
  userId?: string;
  pageSize?: string;
  page?: string;
  query?: string;
  sortBy?: string;
  sortOrder?: string;
};

export const loadFilteredUsers = async ({
  pageSize,
  page,
  query,
  sortBy,
  sortOrder,
}: RequestParams) => {
  let url = `${process.env.BASE_URL}/api/users?${SearchParamsEnum.PAGE}=${page}&${SearchParamsEnum.PAGE_SIZE}=${pageSize}`;

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
  const data: FilteredUsersResponse = await res.json();

  return data;
};

export const loadInitialUserId = async () => {
  const data = await fetch(`${process.env.BASE_URL}/api/homepage`, {
    cache: 'no-store',
  });
  const { initialUserId }: HomePageResponse = await data.json();

  return initialUserId;
};

export const loadSelectedUser = async (id: RequestParams['userId']) => {
  const res = await fetch(`${process.env.BASE_URL}/api/users/${id}`, {
    cache: 'no-store',
  });
  const data: SelectedUserResponse = await res.json();

  return data;
};
