import users from 'data/users.json';

import { type NextRequest } from 'next/server';
import { formatUsersData, getActiveUser, getUsersSelectOption } from 'utils';

export const GET = async (request: NextRequest) => {
  const formattedUsers = formatUsersData(users);
  const userId = request.nextUrl.pathname.split('/').at(-1);

  const userSelectOptions = getUsersSelectOption(formattedUsers);
  const selectedUser = getActiveUser(formattedUsers, userId);

  return Response.json({
    userSelectOptions: userSelectOptions,
    selectedUser: selectedUser,
  });
};
