import page from 'app/page';
import { RouteParams } from 'types';
import { USERS_SEARCH_PLACEHOLDER } from 'utils';
import Search from './Search';
import Table from './Table';

type Props = {
  searchParams: RouteParams['searchParams'];
  params: RouteParams['params'];
};

const Leaderboard = ({ params, searchParams }: Props) => {
  const query = searchParams?.query || '';
  const page = Number(searchParams?.page) || 1;
  return (
    <>
      <Table userId={params.id} query={query} page={page} />
      <div>
        <Search placeholder={USERS_SEARCH_PLACEHOLDER} />
      </div>
    </>
  );
};

export default Leaderboard;
