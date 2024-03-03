import users from 'data/users.json';
import { SearchParamsEnum } from 'enums';
import { chunk } from 'lodash';
import { type NextRequest } from 'next/server';
import { DEFAULT_PAGE_SIZE, formatUsersData } from 'utils';

export const GET = async (request: NextRequest) => {
  const calculatedUsers = formatUsersData(users);

  const searchParams = request.nextUrl.searchParams;
  const pageSize =
    searchParams.get(SearchParamsEnum.PAGE_SIZE) || DEFAULT_PAGE_SIZE;
  const page = searchParams.get(SearchParamsEnum.PAGE) || 1;
  const query = searchParams.get(SearchParamsEnum.QUERY);

  const chunkedUsers = chunk(calculatedUsers, Number(pageSize));

  // if (query) {
  //   const filtered = calculatedUsers.filter((user) =>
  //     user.fullName.toLowerCase().includes(query.toLowerCase()),
  //   );

  //   return Response.json(filtered);
  // }

  return Response.json(chunkedUsers[Number(page) - 1]);
};
