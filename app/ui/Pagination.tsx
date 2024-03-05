'use client';

import { PaginationButtonTypeEnum } from 'enums';
import { usePagination } from 'hooks';
import { FC } from 'react';
import { DataResponce } from 'types';

type Props = {
  paginationData: DataResponce['pagination'];
};

export const Pagination: FC<Props> = ({ paginationData }) => {
  const { getInfoString, getIsButtonActive, handleClick } = usePagination({
    totalUsers: paginationData.totalUsers,
    displayedInfo: paginationData.displayedInfo,
    buttons: paginationData.buttons,
  });

  return (
    <div className='flex justify-between'>
      <div className='sm-text-grey'>{getInfoString()}</div>
      {paginationData.buttons.length > 1 ? (
        <div className='flex gap-1'>
          <button
            className='sm-text-grey pagination-button'
            onClick={() => handleClick(PaginationButtonTypeEnum.PREV)}
          >
            {PaginationButtonTypeEnum.PREV}
          </button>
          {paginationData.buttons.map((item) => (
            <button
              key={item}
              className={`sm-text-grey pagination-button ${getIsButtonActive(String(item)) ? 'bg-dark-blue' : ''}`}
              onClick={() =>
                handleClick(PaginationButtonTypeEnum.PAGE_NUMBER, String(item))
              }
            >
              {item}
            </button>
          ))}
          <button
            className='sm-text-grey pagination-button'
            onClick={() => handleClick(PaginationButtonTypeEnum.NEXT)}
          >
            {PaginationButtonTypeEnum.NEXT}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Pagination;
