import { redirect } from 'next/navigation';

import { loadInitialUserId } from 'utils';

const UsersPage = async () => {
  const initialUserId = await loadInitialUserId();

  redirect(`${process.env.BASE_URL}/users/${initialUserId}`);
};

export default UsersPage;
