// 'use client';
import DeleteIcon from 'icons/DeleteIcon';
import EditIcon from 'icons/EditIcon';
import Link from 'next/link';
import { FC } from 'react';
import { User } from 'types';
import { EDIT_USER_TITLE, REMOVE_USER_TITLE } from 'utils';

type Props = {
  userId: User['id'];
};

const UsersTableActions: FC<Props> = ({ userId }) => {
  return (
    <div className='flex gap-2 justify-center pr-4'>
      <Link href={`/edit-user/${userId}`}>
        <button title={EDIT_USER_TITLE}>
          <EditIcon fill={'#F6742A'} />
        </button>
      </Link>

      <Link href={`/remove-user/${userId}`}>
        <button title={REMOVE_USER_TITLE}>
          <DeleteIcon fill={'#FF3737'} />
        </button>
      </Link>
    </div>
  );
};

export default UsersTableActions;
