import { redirect } from 'next/navigation';

import { getInitialRedirectUrl } from 'utils';

const UsersPage = async () => {
  const url = await getInitialRedirectUrl();

  redirect(url);
};

export default UsersPage;
