import { NextRequest } from 'next/server';

export const POST = async (request: NextRequest) => {
  const data = await request.json();

  const { email, password } = data;

  if (
    email === process.env.TEST_USER_EMAIL &&
    password === process.env.TEST_PASSWORD
  ) {
    return Response.json({
      user: { email, password },
    });
  }

  return Response.json(null);
};
