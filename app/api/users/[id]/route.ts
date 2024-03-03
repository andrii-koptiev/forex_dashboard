import users from 'data/users.json';
import { SearchParamsEnum } from 'enums';
import { type NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get(SearchParamsEnum.QUERY);

  if (query) {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase()),
    );

    return Response.json(filtered);
  }

  return Response.json(users);
};
