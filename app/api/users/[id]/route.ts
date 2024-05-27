import prisma from 'lib/prisma';
import { type NextRequest } from 'next/server';
import { SelectOption, User } from 'types';
import { getChartData, getUsersSelectOption } from 'utils';

export const GET = async (request: NextRequest) => {
  const userId = request.nextUrl.pathname.split('/').at(-1);

  const selectedUser: User | null = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  const selectOptions: Pick<User, 'id' | 'fullName'>[] =
    await prisma.user.findMany({
      select: {
        id: true,
        fullName: true,
      },
    });

  const userSelectOptions: SelectOption[] = getUsersSelectOption(selectOptions);

  return Response.json({
    userSelectOptions,
    selectedUser,
    chartData: selectedUser
      ? getChartData(selectedUser.profit, selectedUser.loss)
      : [],
  });
};

export const DELETE = async (request: NextRequest) => {
  try {
    const userId = request.nextUrl.pathname.split('/').at(-1);

    if (!userId) {
      return new Response('User ID is required', { status: 400 });
    }

    const deletedUser = await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    if (!deletedUser) {
      return new Response('User not found', { status: 404 });
    }

    return new Response('User deleted successfully', { status: 200 });
  } catch (error) {
    console.error('Error deleting user:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};
