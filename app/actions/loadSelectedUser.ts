'use server';

import { RequestParams, SelectedUserResponse } from 'types/api';
import { COMMON_ERROR_MESSAGE } from 'utils';

export const loadSelectedUser = async (id: RequestParams['userId']) => {
  const res = await fetch(`${process.env.BASE_URL}/api/users/${id}`, {
    cache: 'no-store',
  });

  try {
    const data: SelectedUserResponse = await res.json();

    return data;
  } catch (e) {
    throw new Error(COMMON_ERROR_MESSAGE);
  }
};
