import Leaderboard from 'app/ui/Leaderboard';
import { RouteParams } from 'types';

const UsersPage = ({ searchParams }: RouteParams) => {
  return (
    <Leaderboard
      page={searchParams?.page}
      pageSize={searchParams?.pageSize}
      query={searchParams?.query}
      sortBy={searchParams?.sortBy}
      sortOrder={searchParams?.sortOrder}
    />
  );
};

export default UsersPage;
