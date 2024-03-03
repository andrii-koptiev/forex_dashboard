import { UsersTableColumnNameEnum } from 'enums';
import { formatCurrency } from 'utils';
import { loadFilteredUserList } from 'utils/api-helpers';

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
            <th scope='col' className='px-6'>
              {UsersTableColumnNameEnum.USER}
            </th>
            <th scope='col' className='px-6'>
              {UsersTableColumnNameEnum.PROFIT}
            </th>
            <th scope='col' className='px-6'>
              {UsersTableColumnNameEnum.LOSS}
            </th>
            <th scope='col' className='px-6'>
              {UsersTableColumnNameEnum.BALANCE}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, i) => (
            <tr
              key={user.id}
              className={`text-sm text-grey font-semibold border-b border-black ${i % 2 === 0 ? 'bg-green-700' : 'bg-green-800'}`}
            >
              <th scope='row' className='px-6 h-10'>
                {user.fullName}
              </th>
              <td className='px-6 h-10 w-60'>{formatCurrency(user.profit)}</td>
              <td className='px-6 h-10 w-60'>{formatCurrency(user.loss)}</td>
              <td
                className={`px-6 h-10 w-60 ${user.balance >= 0 ? 'text-light-green' : 'text-light-red'}`}
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
