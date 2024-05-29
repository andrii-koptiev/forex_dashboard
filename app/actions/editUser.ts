'use server';

import { User } from 'types';

import { COMMON_ERROR_MESSAGE } from 'utils';

export const editUser = async (
  userId: string,
  userData: Pick<User, 'name' | 'lastname' | 'profit' | 'loss'>,
) => {
  const baseUrl = process.env.BASE_URL;

  if (!baseUrl) {
    throw new Error('BASE_URL is not defined in the environment variables');
  }

  try {
    const response = await fetch(`${baseUrl}/api/users/${userId}`, {
      method: 'PUT',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`Failed to edit user: ${response.statusText}`);
    }

    console.log('User edited successfully');
  } catch (e) {
    console.error(e);

    throw new Error(COMMON_ERROR_MESSAGE);
  }
};
