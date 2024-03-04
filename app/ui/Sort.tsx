'use client';
import { SortOrderEnum, UsersTableColumnNameEnum } from 'enums';
import { useSort } from 'hooks';
import SortAscIcon from 'icons/SortAscIcon';
import SortDescIcon from 'icons/SortDescIcon';
import { FC, memo } from 'react';

type Props = {
  sortBy: UsersTableColumnNameEnum;
};

export const Sort: FC<Props> = ({ sortBy }) => {
  const { handleSort, isSortActive } = useSort({ sortBy });

  return (
    <div className='flex flex-col gap-1'>
      <button onClick={() => handleSort(SortOrderEnum.ASC)}>
        <SortAscIcon
          fill={isSortActive(sortBy, SortOrderEnum.ASC) ? '#0FC2C0' : undefined}
        />
      </button>
      <button onClick={() => handleSort(SortOrderEnum.DESC)}>
        <SortDescIcon
          fill={
            isSortActive(sortBy, SortOrderEnum.DESC) ? '#0FC2C0' : undefined
          }
        />
      </button>
    </div>
  );
};

export default memo(Sort);
