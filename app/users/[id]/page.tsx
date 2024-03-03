import { RouteParams } from 'types';
import { USERS_SEARCH_PLACEHOLDER } from 'utils';
import Search from '../../ui/Search';
import Table from '../../ui/Table';

const UsersPage = async ({ params, searchParams }: RouteParams) => {
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

export default UsersPage;
