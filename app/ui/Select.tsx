'use client';

import { useSelect } from 'hooks';
import { FC, memo } from 'react';
import { SelectOption } from 'types';

type Props = {
  options: SelectOption[];
  selectWidth?: number;
  leftLabelName?: string;
  rigthLabelName?: string;
};

const Select: FC<Props> = ({
  options,
  leftLabelName,
  rigthLabelName,
  selectWidth = 16,
}) => {
  const { defaultPageSize, handleChange } = useSelect();
  return (
    <form className='flex gap-2.5 h-10 items-center'>
      {leftLabelName ? (
        <label
          htmlFor='select'
          className='flex text-base font-semibold text-grey'
        >
          {leftLabelName}
        </label>
      ) : null}

      <select
        id='select'
        className={`bg-dark-blue sm-text-grey rounded-md focus:ring-red-500 focus:border-red-500 block p-2.5 w-${selectWidth}`}
        defaultValue={defaultPageSize}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option.value}>{option.name}</option>
        ))}
      </select>
      {rigthLabelName ? (
        <label htmlFor='select' className='flex base-text-grey'>
          {rigthLabelName}
        </label>
      ) : null}
    </form>
  );
};

export default memo(Select);
