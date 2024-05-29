import { SearchParamsEnum } from 'enums';
import { UserActionEnum } from 'enums/api';
import prisma from 'lib/prisma';
import { type NextRequest } from 'next/server';
import { UserRequest } from 'types/api';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, getPaginationButtons } from 'utils';
import users from '../../../data/users.json';

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;

  const query = searchParams.get(SearchParamsEnum.QUERY);
  const pageSize =
    searchParams.get(SearchParamsEnum.PAGE_SIZE) || DEFAULT_PAGE_SIZE;
  const page = searchParams.get(SearchParamsEnum.PAGE) || DEFAULT_PAGE;
  const sortBy = searchParams.get(SearchParamsEnum.SORT_BY);
  const sortOrder = searchParams.get(SearchParamsEnum.SORT_ORDER);

  const totalFilteredUsersCount = await prisma.user.count({
    where: query
      ? {
          OR: [
            {
              name: {
                contains: query,
                mode: 'insensitive',
              },
            },
            {
              lastname: {
                contains: query,
                mode: 'insensitive',
              },
            },
          ],
        }
      : {},
  });

  const skip = (Number(page) - 1) * Number(pageSize);
  const remainingUsers = totalFilteredUsersCount - skip;
  const take =
    remainingUsers < Number(pageSize) ? remainingUsers : Number(pageSize);

  const filteredUsers = await prisma.user.findMany({
    skip: skip,
    take: take,
    where: query
      ? {
          OR: [
            {
              name: {
                contains: query,
                mode: 'insensitive',
              },
            },
            {
              lastname: {
                contains: query,
                mode: 'insensitive',
              },
            },
          ],
        }
      : {},
    orderBy: sortBy ? { [sortBy]: sortOrder } : {},
  });

  return Response.json({
    users: filteredUsers,
    pagination: {
      buttons: getPaginationButtons(totalFilteredUsersCount, Number(pageSize)),
      totalUsers: totalFilteredUsersCount,
      displayedInfo: [skip + 1, skip + filteredUsers.length],
    },
  });
};

export const POST = async (request: NextRequest) => {
  const { action, userData }: UserRequest = await request.json();

  if (action === UserActionEnum.RESET_USER) {
    await prisma.user.deleteMany({});

    await prisma.user.createMany({
      data: users,
    });

    return Response.json({ message: 'Users reset successfully' });
  } else if (action === UserActionEnum.ADD_USER) {
    if (!userData) {
      return Response.json({ error: 'No user data provided' }, { status: 400 });
    }

    const { name, lastname, profit, loss } = userData;

    const newUser = await prisma.user.create({
      data: {
        name,
        lastname,
        profit,
        loss,
      },
    });

    return Response.json({ message: 'User added successfully', user: newUser });
  }

  return Response.json({ error: 'Invalid action' }, { status: 400 });
};
