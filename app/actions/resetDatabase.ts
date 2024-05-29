import { UserActionEnum } from 'enums/api';
import { COMMON_ERROR_MESSAGE } from 'utils';

export const resetDatabase = async () => {
  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action: UserActionEnum.RESET_DATABASE }),
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
