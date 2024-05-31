import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient().$extends({
  result: {
    user: {
      fullName: {
        needs: { name: true, lastname: true },
        compute(user) {
          return `${user.name} ${user.lastname}`;
        },
      },
    },
  },
});

export default prisma;
