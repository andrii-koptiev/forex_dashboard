import users from 'data/users.json';

export const GET = async () => {
  return Response.json(users);
};
