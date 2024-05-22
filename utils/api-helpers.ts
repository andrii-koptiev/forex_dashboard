import { SearchParamsEnum } from 'enums';
import { FilteredUsersResponse, SelectedUserResponse } from 'types/api';
import { COMMON_ERROR_MESSAGE } from 'utils';

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

  try {
    const data: FilteredUsersResponse = await res.json();
    return data;
  } catch (e) {
    throw new Error(COMMON_ERROR_MESSAGE);
  }
};

export const loadSelectedUser = async (id: RequestParams['userId']) => {
  const res = await fetch(`${process.env.BASE_URL}/api/users/${id}`, {
    cache: 'no-store',
  });

  try {
    const data: SelectedUserResponse = await res.json();

    return data;
  } catch (e) {
    throw new Error(COMMON_ERROR_MESSAGE);
  }
};
