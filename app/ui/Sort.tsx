'use client';
import { SortOrderEnum, UsersTableColumnSortQueryEnum } from 'enums';
import { useSort } from 'hooks';
import SortAscIcon from 'icons/SortAscIcon';
import SortDescIcon from 'icons/SortDescIcon';
import { FC, memo } from 'react';

type Props = {
  sortBy: UsersTableColumnSortQueryEnum;
};

export const Sort: FC<Props> = ({ sortBy }) => {
  const { handleSort, isSortActive } = useSort({ sortBy });

  return (
    <div className='flex gap-2'>
      <button onClick={() => handleSort(SortOrderEnum.ASC)}>
        <SortAscIcon
          fill={isSortActive(sortBy, SortOrderEnum.ASC) ? '#0369A1' : undefined}
        />
      </button>
      <button onClick={() => handleSort(SortOrderEnum.DESC)}>
        <SortDescIcon
          fill={
            isSortActive(sortBy, SortOrderEnum.DESC) ? '#0369A1' : undefined
          }
        />
      </button>
    </div>
  );
};

export default memo(Sort);
