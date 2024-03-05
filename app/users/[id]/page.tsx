import Leaderboard from 'app/ui/Leaderboard';
import Overview from 'app/ui/Overview';
import { RouteParams } from 'types';

const UsersInfo = ({ params, searchParams }: RouteParams) => {
  return (
    <div className='flex flex-col gap-9'>
      <Leaderboard
        page={searchParams?.page}
        pageSize={searchParams?.pageSize}
        query={searchParams?.query}
        sortBy={searchParams?.sortBy}
        sortOrder={searchParams?.sortOrder}
      />
      <Overview userId={params.id} />
    </div>
  );
};

export default UsersInfo;
