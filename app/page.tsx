import { redirect } from 'next/navigation';

import { loadInitialUserId } from 'utils';

const Home = async () => {
  const initialUserId = await loadInitialUserId();
  redirect(`${process.env.BASE_URL}/users/${initialUserId}`);
};

export default Home;
