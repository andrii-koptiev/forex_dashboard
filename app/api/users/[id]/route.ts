import users from 'data/users.json';
import { type NextRequest } from 'next/server';

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } },
) => {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');

  if (query) {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase()),
    );

    return Response.json(filtered);
  }

  return Response.json(users);
};
