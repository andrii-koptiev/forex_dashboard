import { UsersTableColumnNameEnum } from 'enums';
import { formatCurrency } from 'utils';
import { loadFilteredUserList } from 'utils/api-helpers';
import Sort from './Sort';

type Props = {
  userId: string;
  pageSize: number;
  query: string;
  page: number;
};

const Table = async ({ userId, pageSize, query, page }: Props) => {
  const filteredUsers = await loadFilteredUserList({
    userId,
    query,
    pageSize,
    page,
  });

  return (
    <div className='relative overflow-x-auto sm:rounded-md'>
      <table className='w-full text-left'>
        <thead className='bg-dark-blue h-10 text-sm font-bold text-grey capitalize'>
          <tr>
            {Object.values(UsersTableColumnNameEnum).map((columnName) => (
              <th key={columnName} scope='col' className='px-2.5 h-10'>
                <div className='flex items-center justify-between'>
                  {columnName}
                  <Sort sortBy={columnName} />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, i, array) => (
            <tr
              key={user.id}
              className={`text-sm text-grey font-semibold  ${i % 2 === 0 ? 'bg-green-700' : 'bg-green-800'} ${i !== array.length - 1 ? 'border-b border-dark-grey' : ''}`}
            >
              <th scope='row' className='px-2.5 h-10'>
                {user.fullName}
              </th>
              <td className='px-2.5 h-10 w-64'>
                {formatCurrency(user.profit)}
              </td>
              <td className='px-2.5 h-10 w-64'>{formatCurrency(user.loss)}</td>
              <td
                className={`px-2.5 h-10 w-64 ${user.balance >= 0 ? 'text-light-green' : 'text-light-red'}`}
              >
                {formatCurrency(user.balance)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
