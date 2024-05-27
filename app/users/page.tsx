import LeaderBoard from 'app/ui/LeaderBoard';
import { RouteParams } from 'types';

const UsersPage = ({ searchParams }: RouteParams) => {
  return (
    <LeaderBoard
      page={searchParams?.page}
      pageSize={searchParams?.pageSize}
      query={searchParams?.query}
      sortBy={searchParams?.sortBy}
      sortOrder={searchParams?.sortOrder}
    />
  );
};

export default UsersPage;
