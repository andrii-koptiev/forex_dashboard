import Leaderboard from 'app/ui/Leaderboard';
import SignOutButton from 'app/ui/SignOutButton';
import ResetDatabaseButton from 'app/ui/features/usersTable/ResetDatabaseButton';
import { isEmpty } from 'lodash';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { RouteParams } from 'types';
import { ADD_USER, getInitialRedirectUrl } from 'utils';

const UsersPage = async ({ searchParams }: RouteParams) => {
  if (isEmpty(searchParams)) {
    const url = await getInitialRedirectUrl();

    redirect(url);
  }

  return (
    <div className='flex flex-col gap-4 w-full'>
      <div className='flex '>
        <div className='flex gap-4'>
          <ResetDatabaseButton />
          <Link
            type='button'
            className='button text-dark-blue bg-light-green w-48 text-center'
            href='/add-user'
          >
            {ADD_USER}
          </Link>
        </div>

        <div className='flex flex-1 justify-end w-full'>
          <SignOutButton />
        </div>
      </div>

      <Leaderboard
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
