import users from 'data/users.json';
import { SearchParamsEnum } from 'enums';
import { type NextRequest } from 'next/server';
import { formatUsersData } from 'utils';

export const GET = async (request: NextRequest) => {
  const calculatedUsers = formatUsersData(users);

  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get(SearchParamsEnum.QUERY);

  if (query) {
    const filtered = calculatedUsers.filter((user) =>
      user.fullName.toLowerCase().includes(query.toLowerCase()),
    );

    return Response.json(filtered);
  }

  return Response.json(calculatedUsers);
};
