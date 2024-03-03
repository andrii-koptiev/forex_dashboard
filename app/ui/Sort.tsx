'use client';
import { SortOrderEnum, UsersTableColumnNameEnum } from 'enums';
import SortAscIcon from 'icons/SortAscIcon';
import SortDescIcon from 'icons/SortDescIcon';
import { FC, useState } from 'react';

type Props = {
  sortBy: UsersTableColumnNameEnum;
};

export const Sort: FC<Props> = () => {
  const [sortOrder, setSortOrder] = useState<SortOrderEnum>(SortOrderEnum.NONE);

  const onAscSortClick = () => setSortOrder(SortOrderEnum.ASC);
  const onDescSortClick = () => setSortOrder(SortOrderEnum.DESC);

  return (
    <div className='flex flex-col gap-1'>
      <button onClick={onAscSortClick}>
        <SortAscIcon
          fill={sortOrder === SortOrderEnum.ASC ? '#0FC2C0' : undefined}
        />
      </button>
      <button onClick={onDescSortClick}>
        <SortDescIcon
          fill={sortOrder === SortOrderEnum.DESC ? '#0FC2C0' : undefined}
        />
      </button>
    </div>
  );
};

export default Sort;
