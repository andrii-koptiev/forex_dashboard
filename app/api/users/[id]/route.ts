import users from 'data/users.json';
import { SearchParamsEnum } from 'enums';
import { chunk } from 'lodash';
import { type NextRequest } from 'next/server';
import { User } from 'types';
import { DEFAULT_PAGE_SIZE, formatUsersData, getFromToUsers } from 'utils';

export const GET = async (request: NextRequest) => {
  const formattedUsers = formatUsersData(users);
  let filteredUsers = formattedUsers;
  let chunkedUsers: User[][] = [];

  const searchParams = request.nextUrl.searchParams;
  const pageSize =
    searchParams.get(SearchParamsEnum.PAGE_SIZE) || DEFAULT_PAGE_SIZE;
  const page = searchParams.get(SearchParamsEnum.PAGE) || 1;
  const query = searchParams.get(SearchParamsEnum.QUERY);

  if (query) {
    filteredUsers = formattedUsers.filter((user) =>
      user.fullName.toLowerCase().includes(query.toLowerCase()),
    );
  }

  if (filteredUsers.length) {
    chunkedUsers = chunk(filteredUsers, Number(pageSize));
  }

  const resultUsers = chunkedUsers[Number(page) - 1];
  const totalFilteredUsers = filteredUsers.length;
  const paginationButtons = chunkedUsers.map((_, i) => i + 1);
  const displayedFromTo = getFromToUsers(
    chunkedUsers[Number(page) - 1],
    filteredUsers,
  );

  return Response.json({
    users: resultUsers,
    pagination: {
      totalUsers: totalFilteredUsers,
      buttons: paginationButtons,
      displayedInfo: displayedFromTo,
    },
  });
};
