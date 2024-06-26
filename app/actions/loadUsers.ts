import { SearchParamsEnum } from 'enums';
import { FilteredUsersResponse, RequestParams } from 'types/api';
import { COMMON_ERROR_MESSAGE } from 'utils';

export const loadUsers = async ({
  pageSize,
  page,
  query,
  sortBy,
  sortOrder,
}: RequestParams) => {
  let url = `/api/users?${SearchParamsEnum.PAGE}=${page}&${SearchParamsEnum.PAGE_SIZE}=${pageSize}`;

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
