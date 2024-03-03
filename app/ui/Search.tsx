'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, FC } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import SearchIcon from 'icons/SearchIcon';

type Props = {
  placeholder: string;
};

const Search: FC<Props> = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);
      if (event.target.value) {
        params.set('query', event.target.value);
        params.set('page', '2');
      } else {
        params.delete('query');
      }
      replace(`${pathname}?${params.toString()}`);
    },
    300,
  );

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
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  );
};

export default Search;
