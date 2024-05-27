import prisma from 'lib/prisma';
import users from '../../../../data/users.json';

export const POST = async () => {
  await prisma.user.deleteMany({});

  await prisma.user.createMany({
    data: users,
  });

  return Response.json({});
};
