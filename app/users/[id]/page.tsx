import { USERS_SEARCH_PLACEHOLDER } from 'utils';
import Search from '../../ui/Search';
import Table from '../../ui/Table';

const UsersPage = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <>
      <Table userId={params.id} query={query} currentPage={currentPage} />
      <div>
        <Search placeholder={USERS_SEARCH_PLACEHOLDER} />
      </div>
    </>
  );
};

export default UsersPage;
