import { redirect } from 'next/navigation';

import { loadUserList } from 'utils';

const Home = async () => {
  const users = await loadUserList();

  const initialUserId = users[0].id;
  redirect(`${process.env.BASE_URL}/users/${initialUserId}`);
};

export default Home;
