import {
  SearchParamsEnum,
  SortOrderEnum,
  UsersTableColumnNameEnum,
} from 'enums';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type UseSortProps = {
  sortBy: UsersTableColumnNameEnum;
};

type UseSortReturnType = {
  handleSort: (event: SortOrderEnum) => void;
  isSortActive: (sortBy: UsersTableColumnNameEnum, sortOrder: SortOrderEnum) => boolean;
};

export const useSort = ({ sortBy }: UseSortProps): UseSortReturnType => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSort = (sortOrder: SortOrderEnum) => {
    const params = new URLSearchParams(searchParams);
    const sortByQuery = params.get(SearchParamsEnum.SORT_BY);
    const sortOrderQuery = params.get(SearchParamsEnum.SORT_ORDER);

    if (sortByQuery === sortBy && sortOrderQuery === sortOrder) {
      params.delete(SearchParamsEnum.SORT_BY);
      params.delete(SearchParamsEnum.SORT_ORDER);

      replace(`${pathname}?${params.toString()}`);

      return;
    }

    params.set(SearchParamsEnum.SORT_BY, sortBy);
    params.set(SearchParamsEnum.SORT_ORDER, sortOrder);
    replace(`${pathname}?${params.toString()}`);
  };

  const isSortActive = (sortBy: UsersTableColumnNameEnum, sortOrder: SortOrderEnum) => {
    const params = new URLSearchParams(searchParams);
    return (
      sortBy === params.get(SearchParamsEnum.SORT_BY) &&
      sortOrder === params.get(SearchParamsEnum.SORT_ORDER)
    );
  };

  return { handleSort, isSortActive };
};
