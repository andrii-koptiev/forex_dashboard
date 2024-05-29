'use client';

import { resetDatabase } from 'app/actions/resetDatabase';
import { AppCustomEventsEnum } from 'enums';
import { FC } from 'react';
import { COMMON_ERROR_MESSAGE, RESET_DATABASE_BUTTON } from 'utils';

const ResetDatabaseButton: FC = () => {
  const handleClick = async () => {
    try {
      await resetDatabase();
      document.dispatchEvent(new Event(AppCustomEventsEnum.UPDATE_USERS_TABLE));
    } catch (e) {
      console.error(e);
      throw new Error(COMMON_ERROR_MESSAGE);
    }
  };

  return (
    <button
      type='button'
      className='button text-dark-blue bg-beige w-48'
      onClick={handleClick}
    >
      {RESET_DATABASE_BUTTON}
    </button>
  );
};

export default ResetDatabaseButton;
