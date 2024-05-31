import { signOut } from 'auth';
import { FC } from 'react';
import { COMMON_BUTTON_LOGOUT } from 'utils';

const SignOutButton: FC = () => {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button className='button text-black bg-orange opacity-80 w-48'>
        {COMMON_BUTTON_LOGOUT}
      </button>
    </form>
  );
};

export default SignOutButton;
