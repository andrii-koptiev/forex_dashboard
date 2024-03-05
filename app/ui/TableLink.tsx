'use client';

import { useReplaceParamsId } from 'hooks';
import { FC } from 'react';

type Props = {
  name: string;
  id: string;
};

const TableLink: FC<Props> = ({ name, id }) => {
  const { handleReplaceId, getIsActive } = useReplaceParamsId();

  return (
    <th
      scope='row'
      className={`px-2.5 cursor-pointer ${getIsActive(id) ? 'text-sky-700' : ''}`}
      onClick={() => handleReplaceId(id)}
    >
      {name}
    </th>
  );
};

export default TableLink;
