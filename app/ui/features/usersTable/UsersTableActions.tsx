// 'use client';
import DeleteIcon from 'icons/DeleteIcon';
import EditIcon from 'icons/EditIcon';
import { FC } from 'react';
import { EDIT_USER_TITLE, REMOVE_USER_TITLE } from 'utils';

const UsersTableActions: FC = () => {
  return (
    <div className='flex gap-2 justify-center pr-4'>
      <button title={EDIT_USER_TITLE}>
        <EditIcon fill={'#F6742A'} />
      </button>
      <button
        data-modal-target='popup-modal'
        data-modal-toggle='popup-modal'
        title={REMOVE_USER_TITLE}
      >
        <DeleteIcon fill={'#FF3737'} />
      </button>
    </div>
  );
};

export default UsersTableActions;
