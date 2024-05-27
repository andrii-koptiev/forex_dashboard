import { resetDatabase } from 'app/actions/resetDatabase';
import Button from 'app/ui/Button';
import LeaderBoard from 'app/ui/LeaderBoard';
import { RouteParams } from 'types';
import { RESET_DATABASE_BUTTON } from 'utils';

const UsersPage = ({ searchParams }: RouteParams) => {
  return (
    <div className='flex flex-col gap-9'>
      <div className='flex justify-end'>
        <Button
          buttonText={RESET_DATABASE_BUTTON}
          handleClick={resetDatabase}
        />
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
