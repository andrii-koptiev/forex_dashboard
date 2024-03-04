'use client';

import { FC } from 'react';

import { useSearch } from 'hooks';
import SearchIcon from 'icons/SearchIcon';

type Props = {
  placeholder: string;
};

const Search: FC<Props> = ({ placeholder }) => {
  const { handleSearch, defaultSearchValue } = useSearch({ debounceTime: 500 });

  return (
    <div className='relative'>
      <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
        <SearchIcon className='w-4 h-4 text-beige' />
      </div>
      <input
        onChange={handleSearch}
        type='search'
        placeholder={placeholder}
        className='block bg-dark-blue rounded-md w-56 h-10 px-4 ps-10 text-sm font-semibold text-grey focus:ring-beige focus:border-beige'
        defaultValue={defaultSearchValue}
      />
    </div>
  );
};

export default Search;
