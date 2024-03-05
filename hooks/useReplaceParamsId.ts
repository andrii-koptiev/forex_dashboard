import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { RouteParams } from 'types';

type UseReplaceParamsIdProps = {
  id: RouteParams['params']['id'];
};

type UseReplaceParamsIdReturnType = {
  handleReplaceId: () => void;
  isActive: boolean;
};

export const useReplaceParamsId = ({
  id,
}: UseReplaceParamsIdProps): UseReplaceParamsIdReturnType => {
  const [isActive, setIsActive] = useState(false);
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  useEffect(() => {
    setIsActive(pathname.includes(id));
  }, [pathname, id]);

  const handleReplaceId = () => {
    const splitted = pathname.split('/');

    splitted[splitted.length - 1] = id;

    const newPathname = splitted.join('/');

    replace(`${newPathname}?${params.toString()}`);
  };

  return { handleReplaceId, isActive };
};
