import users from 'data/users.json';

export const GET = () => {
  return Response.json({ initialUserId: users[0].id });
};
