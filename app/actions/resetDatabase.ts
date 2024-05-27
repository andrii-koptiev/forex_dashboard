'use server';

import { COMMON_ERROR_MESSAGE } from 'utils';

export const resetDatabase = async () => {
  await fetch(`${process.env.BASE_URL}/api/database/reset`, {
    cache: 'no-store',
  });

  try {
    console.log('Database updated to initial data');
  } catch (e) {
    throw new Error(COMMON_ERROR_MESSAGE);
  }
};
