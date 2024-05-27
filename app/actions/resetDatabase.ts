'use server';

import { COMMON_ERROR_MESSAGE } from 'utils';

export const resetDatabase = async () => {
  const baseUrl = process.env.BASE_URL;

  if (!baseUrl) {
    throw new Error('BASE_URL is not defined in the environment variables');
  }

  try {
    const response = await fetch(`${baseUrl}/api/database/reset`, {
      method: 'POST', // Assuming POST is appropriate for a reset operation
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to reset database: ${response.statusText}`);
    }

    console.log('Database reset to initial data');
  } catch (e) {
    console.error(e);
    throw new Error(COMMON_ERROR_MESSAGE);
  }
};
