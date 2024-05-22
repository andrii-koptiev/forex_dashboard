import { PaginationButtonTypeEnum, SearchParamsEnum } from 'enums';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { PaginationData } from 'types';
import { DEFAULT_PAGE } from 'utils';

type UsePaginationProps = {
  totalUsers: PaginationData['totalUsers'];
  displayedInfo: PaginationData['displayedInfo'];
  buttons: PaginationData['buttons'];
};

type UsePaginationReturnType = {
  getInfoString: () => string;
  getIsButtonActive: (page: string) => boolean;
  handleClick: (buttonType: PaginationButtonTypeEnum, page?: string) => void;
};

export const usePagination = ({
  totalUsers,
  displayedInfo,
  buttons,
}: UsePaginationProps): UsePaginationReturnType => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = useMemo(() => {
    return new URLSearchParams(searchParams);
  }, [searchParams]);

  const currentPage = params.get(SearchParamsEnum.PAGE) || DEFAULT_PAGE;

  const getIsButtonActive = useCallback(
    (page: string) => page === String(currentPage),
    [currentPage],
  );

  const getInfoString = () =>
    `Showing ${displayedInfo[0]} to ${displayedInfo[1]} of ${totalUsers} entries`;

  const handleClick = useCallback(
    (buttonType: PaginationButtonTypeEnum, page?: string) => {
      if (!page) {
        const minPage = 1;
        const maxPage = buttons.length;
        if (buttonType === PaginationButtonTypeEnum.PREV) {
          params.set(
            SearchParamsEnum.PAGE,
            String(Number(currentPage) - 1 || minPage),
          );
        } else {
          Number(currentPage) > maxPage - 1
            ? params.set(SearchParamsEnum.PAGE, String(maxPage))
            : params.set(
                SearchParamsEnum.PAGE,
                String(Number(currentPage) + 1),
              );
        }
      } else {
        params.set(SearchParamsEnum.PAGE, page);
      }

      replace(`${pathname}?${params.toString()}`);
    },
    [buttons.length, currentPage, params, pathname, replace],
  );

  return { getInfoString, getIsButtonActive, handleClick };
};
