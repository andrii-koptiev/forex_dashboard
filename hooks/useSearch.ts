import { SearchParamsEnum } from 'enums';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';
import { DebouncedState, useDebouncedCallback } from 'use-debounce';

type UseSearchProps = {
  decounceTime: number;
};

type UseSearchReturnType = {
  handleSearch: DebouncedState<(event: ChangeEvent<HTMLInputElement>) => void>;
  defaultValue?: string;
};

export const useSearch = ({
  decounceTime,
}: UseSearchProps): UseSearchReturnType => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);
      if (event.target.value) {
        params.set(SearchParamsEnum.QUERY, event.target.value);
      } else {
        params.delete(SearchParamsEnum.QUERY);
      }
      replace(`${pathname}?${params.toString()}`);
    },
    decounceTime,
  );

  const defaultValue = searchParams.get(SearchParamsEnum.QUERY)?.toString();

  return { handleSearch, defaultValue };
};
