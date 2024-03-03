import Leaderboard from 'app/ui/Leaderboard';
import { RouteParams } from 'types';

const UsersInfo = ({ params, searchParams }: RouteParams) => {
  return <Leaderboard params={params} searchParams={searchParams} />;
};

export default UsersInfo;
