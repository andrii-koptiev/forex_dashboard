import users from 'data/users.json';

import { type NextRequest } from 'next/server';
import {
  formatSelectedUsersData,
  getActiveUser,
  getUsersSelectOption,
} from 'utils';

export const GET = (request: NextRequest) => {
  const formattedUsers = formatSelectedUsersData(users);
  const userId = request.nextUrl.pathname.split('/').at(-1);

  const userSelectOptions = getUsersSelectOption(formattedUsers);
  const selectedUser = getActiveUser(formattedUsers, userId);

  return Response.json({
    userSelectOptions: userSelectOptions,
    selectedUser: selectedUser,
  });
};
