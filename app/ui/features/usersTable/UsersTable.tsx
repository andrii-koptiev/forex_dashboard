'use client';

import { loadUsers } from 'app/actions/loadUsers';
import Loader from 'app/ui/Loader';
import Pagination from 'app/ui/Pagination';
import Sort from 'app/ui/Sort';
import { usersTableHeaderData } from 'data/usersTableHeaderData';
import { AppCustomEventsEnum } from 'enums';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { FilteredUsersResponse } from 'types/api';
import {
  COMMON_ERROR_MESSAGE,
  NO_RESULTS,
  formatCurrency,
  getSumFormArray,
} from 'utils';
import UsersTableActions from './UsersTableActions';

type Props = {
  pageSize: string;
  page: string;
  query?: string;
  sortBy?: string;
  sortOrder?: string;
};

const UsersTable = ({ pageSize, query, page, sortBy, sortOrder }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [usersResponse, setUsersResponse] =
    useState<FilteredUsersResponse | null>(null);

  const fetchUsers = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await loadUsers({
        pageSize,
        page,
        query,
        sortBy,
        sortOrder,
      });
      setUsersResponse(response);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      throw new Error(COMMON_ERROR_MESSAGE);
    }
  }, [page, pageSize, query, sortBy, sortOrder]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    document.addEventListener(
      AppCustomEventsEnum.UPDATE_USERS_TABLE,
      fetchUsers,
    );

    return () => {
      document.removeEventListener(
        AppCustomEventsEnum.UPDATE_USERS_TABLE,
        fetchUsers,
      );
    };
  }, [fetchUsers]);

  return (
    <>
      <div
        className='relative overflow-auto sm:rounded-md mb-4 dynamic-tbody flex-1'
        style={{ '--page-size': pageSize } as React.CSSProperties}
      >
        <>
          {isLoading ? (
            <div className='flex h-full w-full justify-center items-center'>
              <Loader />
            </div>
          ) : usersResponse?.users.length ? (
            <table className='w-full text-left table-fixed'>
              <thead className='bg-dark-blue h-10 text-sm font-bold text-grey capitalize sticky top-0'>
                <tr>
                  {usersTableHeaderData.map(({ columnName, sortQuery }) => (
                    <th key={columnName} scope='col' className='px-2.5 h-10'>
                      <div className='flex align-center justify-between'>
                        {columnName}
                        {sortQuery && <Sort sortBy={sortQuery} />}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {usersResponse?.users.map((user, i, array) => {
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
                      <td className='px-2.5 w-8'>
                        <UsersTableActions userId={user.id} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <>
              {!isLoading && (
                <div className='base-text-grey flex w-full h-full justify-center items-center'>{`${NO_RESULTS} "${query}"`}</div>
              )}
            </>
          )}
        </>
      </div>
      {!isLoading && <Pagination paginationData={usersResponse?.pagination} />}
    </>
  );
};

export default UsersTable;
