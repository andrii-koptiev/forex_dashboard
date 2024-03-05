import Leaderboard from 'app/ui/Leaderboard';
import Overview from 'app/ui/Overview';
import { RouteParams } from 'types';

const UsersInfo = ({ params, searchParams }: RouteParams) => {
  return (
    <div className='flex flex-col gap-9'>
      <Leaderboard params={params} searchParams={searchParams} />
      <Overview params={params} searchParams={searchParams} />
    </div>
  );
};

export default UsersInfo;
