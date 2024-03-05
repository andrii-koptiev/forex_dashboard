import users from 'data/users.json';
import { SearchParamsEnum } from 'enums';
import { type NextRequest } from 'next/server';
import { FormattedUserDB } from 'types/api-types';
import {
  DEFAULT_PAGE,
  DEFAULT_PAGE_SIZE,
  formatUsersData,
  getChunckedUsers,
  getPaginationData,
  sortUsersBy,
} from 'utils';

export const GET = async (request: NextRequest) => {
  const formattedUsers = formatUsersData(users);
  let filteredUsers: FormattedUserDB[] = [];
  let chunkedUsers: FormattedUserDB[][] = [];

  const searchParams = request.nextUrl.searchParams;
  const pageSize =
    searchParams.get(SearchParamsEnum.PAGE_SIZE) || DEFAULT_PAGE_SIZE;
  const page = searchParams.get(SearchParamsEnum.PAGE) || DEFAULT_PAGE;
  const query = searchParams.get(SearchParamsEnum.QUERY);
  const sortBy = searchParams.get(SearchParamsEnum.SORT_BY);
  const sortOrder = searchParams.get(SearchParamsEnum.SORT_ORDER);

  filteredUsers = query
    ? formattedUsers.filter((user) =>
        user.fullName.toLowerCase().includes(query.toLowerCase()),
      )
    : formattedUsers;
  filteredUsers = sortUsersBy(filteredUsers, sortBy, sortOrder);
  chunkedUsers = getChunckedUsers(filteredUsers, Number(pageSize));

  const resultUsers = chunkedUsers[Number(page) - 1] || [];

  const paginationData = getPaginationData(
    filteredUsers,
    chunkedUsers,
    String(page),
  );

  return Response.json({
    users: resultUsers,
    pagination: paginationData,
  });
};
