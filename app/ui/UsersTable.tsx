import { usersTableHeaderData } from 'data/usersTableHeaderData';
import Link from 'next/link';
import { NO_RESULTS, formatCurrency, getSumFormArray } from 'utils';
import { loadFilteredUsers } from 'utils/api-helpers';
import Pagination from './Pagination';
import Sort from './Sort';

type Props = {
  pageSize: string;
  page: string;
  query?: string;
  sortBy?: string;
  sortOrder?: string;
};

const UsersTable = async ({
  pageSize,
  query,
  page,
  sortBy,
  sortOrder,
}: Props) => {
  const { users, pagination } = await loadFilteredUsers({
    pageSize,
    page,
    query,
    sortBy,
    sortOrder,
  });

  return (
    <>
      <div
        className='dynamic-table relative overflow-x-auto sm:rounded-md mb-4 dynamic-tbody'
        style={{ '--page-size': pageSize } as React.CSSProperties}
      >
        {users.length ? (
          <table className='w-full text-left'>
            <thead className='bg-dark-blue h-10 text-sm font-bold text-grey capitalize'>
              <tr>
                {usersTableHeaderData.map(({ columnName, sortQuery }) => (
                  <th key={columnName} scope='col' className='px-2.5 h-10'>
                    <div className='flex items-center justify-between'>
                      {columnName}
                      {sortQuery && <Sort sortBy={sortQuery} />}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((user, i, array) => {
                const profitAmount = getSumFormArray(user.profit);
                const lossAmount = getSumFormArray(user.loss);
                const balanceAmount = profitAmount - lossAmount;

                return (
                  <tr
                    key={user.id}
                    className={`h-10 sm-text-grey  ${i % 2 === 0 ? 'bg-green-700' : 'bg-green-800'} ${i !== array.length - 1 ? 'border-b border-dark-grey' : ''}`}
                  >
                    <th
                      scope='row'
                      className='px-2.5 cursor-pointer hover:text-sky-700 transition duration-100 ease-in-out'
                    >
                      <Link href={`users/${user.id}`}>{user.fullName}</Link>
                    </th>

                    <td className='px-2.5 w-64'>
                      {formatCurrency(profitAmount)}
                    </td>
                    <td className='px-2.5 w-64'>
                      {formatCurrency(lossAmount)}
                    </td>
                    <td
                      className={`px-2.5 w-64 ${balanceAmount >= 0 ? 'text-light-green' : 'text-light-red'}`}
                    >
                      {formatCurrency(balanceAmount)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className='base-text-grey flex w-full h-full justify-center items-center'>{`${NO_RESULTS} "${query}"`}</div>
        )}
      </div>
      {users.length ? <Pagination paginationData={pagination} /> : null}
    </>
  );
};

export default UsersTable;
