import { resetDatabase } from 'app/actions/resetDatabase';
import LeaderBoard from 'app/ui/Leaderboard';
import { isEmpty } from 'lodash';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { RouteParams } from 'types';
import { ADD_USER, RESET_DATABASE_BUTTON, getInitialRedirectUrl } from 'utils';

const UsersPage = async ({ searchParams }: RouteParams) => {
  if (isEmpty(searchParams)) {
    const url = await getInitialRedirectUrl();

    redirect(url);
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-2'>
        <button
          type='button'
          className='button text-dark-blue bg-beige w-48'
          onClick={resetDatabase}
        >
          {RESET_DATABASE_BUTTON}
        </button>

        <Link
          type='button'
          className='button text-dark-blue bg-light-green w-48 text-center'
          href='/add-user'
        >
          {ADD_USER}
        </Link>
      </div>

      <LeaderBoard
        page={searchParams?.page}
        pageSize={searchParams?.pageSize}
        query={searchParams?.query}
        sortBy={searchParams?.sortBy}
        sortOrder={searchParams?.sortOrder}
      />
    </div>
  );
};

export default UsersPage;
