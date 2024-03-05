'use client';

import { useReplaceParamsId } from 'hooks';
import { FC } from 'react';

type Props = {
  name: string;
  id: string;
};

const TableLink: FC<Props> = ({ name, id }) => {
  const { handleReplaceId, isActive } = useReplaceParamsId({
    id,
  });

  return (
    <th
      scope='row'
      className={`px-2.5 cursor-pointer ${isActive ? 'text-sky-700' : ''}`}
      onClick={handleReplaceId}
    >
      {name}
    </th>
  );
};

export default TableLink;
