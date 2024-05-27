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
