'use server';

import { UserActionEnum } from 'enums/api';
import { User } from 'types';

import { COMMON_ERROR_MESSAGE } from 'utils';

export const addUser = async (
  userData: Pick<User, 'name' | 'lastname' | 'profit' | 'loss'>,
) => {
  const baseUrl = process.env.BASE_URL;

  if (!baseUrl) {
    throw new Error('BASE_URL is not defined in the environment variables');
  }

  try {
    const response = await fetch(`${baseUrl}/api/users`, {
      method: 'POST',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action: UserActionEnum.ADD_USER, userData }),
    });

    if (!response.ok) {
      throw new Error(`Failed to add user: ${response.statusText}`);
    }

    console.log('User added successfully');
  } catch (e) {
    console.error(e);
    throw new Error(COMMON_ERROR_MESSAGE);
  }
};
