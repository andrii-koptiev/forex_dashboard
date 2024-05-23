import { SearchParamsEnum, SelectTypeEnum } from 'enums';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useCallback } from 'react';
import { User } from 'types';

type UseSelectProps = {
  selectType: SelectTypeEnum;
  selectedUser?: User;
};

type UseSelectReturnType = {
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  defaultValue?: string;
};

export const useSelect = ({
  selectType,
  selectedUser,
}: UseSelectProps): UseSelectReturnType => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace, push } = useRouter();

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const params = new URLSearchParams(searchParams);
      if (selectType === SelectTypeEnum.PAGE_SIZE_SELECT) {
        if (event.target.value) {
          params.set(SearchParamsEnum.PAGE_SIZE, event.target.value);
        } else {
          params.delete(SearchParamsEnum.PAGE_SIZE);
        }
        replace(`${pathname}?${params.toString()}`);
      } else {
        push(event.target.value);
      }
    },
    [searchParams, selectType, replace, pathname, push],
  );

  const defaultValue =
    selectType === SelectTypeEnum.USER_SELECT
      ? selectedUser?.id
      : searchParams.get(SearchParamsEnum.PAGE_SIZE)?.toString();

  return { handleChange, defaultValue };
};
