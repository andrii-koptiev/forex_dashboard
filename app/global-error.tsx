'use client';

import { useEffect } from 'react';
import { AppError } from 'types';
import { RETRY_BUTTON } from 'utils';

const Error = ({ error, reset }: AppError) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className='flex flex-col gap-4'>
      <h2 className='base-text-grey'>{error.message}</h2>
      <button
        className='bg-light-red text-dark-blue font-semibold text-sm rounded-md p-2.5 hover:opacity-80'
        onClick={() => reset()}
      >
        {RETRY_BUTTON}
      </button>
    </div>
  );
};

export default Error;
