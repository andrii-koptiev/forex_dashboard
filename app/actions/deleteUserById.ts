'use server';

import { COMMON_ERROR_MESSAGE } from 'utils';

export const deleteUserById = async (userId: string) => {
  const baseUrl = process.env.BASE_URL;

  if (!baseUrl) {
    throw new Error('BASE_URL is not defined in the environment variables');
  }

  try {
    const response = await fetch(`${baseUrl}/api/users/${userId}`, {
      method: 'DELETE',
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to delete user: ${response.statusText}`);
    }

    console.log('User deleted successfully');
  } catch (e) {
    console.error(e);
    throw new Error(COMMON_ERROR_MESSAGE);
  }
};
