import { redirect } from 'next/navigation';

import { loadUserList } from 'utils';

const UsersPage = async () => {
  const users = await loadUserList();

  const initialUserId = users[0].id;
  redirect(`${process.env.BASE_URL}/users/${initialUserId}`);
};

export default UsersPage;
