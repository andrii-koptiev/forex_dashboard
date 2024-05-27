'use client';

import { SelectTypeEnum } from 'enums';
import { useSelect } from 'hooks';
import { FC, memo } from 'react';
import { SelectOption, User } from 'types';

type Props = {
  options: SelectOption[];
  type: SelectTypeEnum;
  leftLabelName?: string;
  rightLabelName?: string;
  selectedUser?: User;
  width?: number;
};

const Select: FC<Props> = ({
  options,
  leftLabelName,
  rightLabelName,
  type,
  selectedUser,
  width = 20,
}) => {
  const { defaultValue, handleChange } = useSelect({
    selectType: type,
    selectedUser,
  });
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
        className={`select w-${width} ${type === SelectTypeEnum.USER_SELECT ? 'user-select' : ''}`}
        defaultValue={defaultValue}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      {rightLabelName ? (
        <label htmlFor='select' className='flex base-text-grey'>
          {rightLabelName}
        </label>
      ) : null}
    </form>
  );
};

export default memo(Select);
