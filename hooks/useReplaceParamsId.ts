import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type UseReplaceParamsIdReturnType = {
  handleReplaceId: (userId: string) => void;
  getIsActive: (userId: string) => boolean;
};

export const useReplaceParamsId = (): UseReplaceParamsIdReturnType => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const getIsActive = (userId: string) => pathname.includes(userId);

  const handleReplaceId = (userId: string) => {
    const splitted = pathname.split('/');

    splitted[splitted.length - 1] = userId;

    const newPathname = splitted.join('/');

    replace(`${newPathname}?${params.toString()}`);
  };

  return { handleReplaceId, getIsActive };
};
