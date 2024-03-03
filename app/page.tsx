import { redirect } from 'next/navigation';

import { getInitialRedirectUrl } from 'utils';

const Home = async () => {
  const url = await getInitialRedirectUrl();

  redirect(url);
};

export default Home;
