'use client';

import { authenticate } from 'app/actions/authenticate';
import { FC } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import {
  COMMON_BUTTON_LOGGING_IN,
  COMMON_BUTTON_LOGIN,
  EMAIL_LABEL,
  LOGIN_FORM_TITLE,
  PASSWORD_LABEL,
  TEST_PASSWORD,
  TEST_USER_EMAIL,
} from 'utils';

const LoginForm: FC = () => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const { pending } = useFormStatus();

  return (
    <div className='flex min-h-full w-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
      <div className='relative transform max-w-[600px] rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full'>
        <div className='mt-3 text-center sm:ml-12  sm:text-left'>
          <h3
            className='text-lg font-semibold leading-6 text-gray-900'
            id='add-user-modal-title'
          >
            {LOGIN_FORM_TITLE}
          </h3>
        </div>
        <form className='px-12 py-8' action={dispatch}>
          <div className='mb-5'>
            <label htmlFor='email' className='block mb-2 text-sm font-medium'>
              {EMAIL_LABEL}
            </label>
            <input
              id='email'
              type='email'
              name='email'
              defaultValue={TEST_USER_EMAIL}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-green focus:border-dark-green block w-full p-2.5'
              required
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              {PASSWORD_LABEL}
            </label>
            <input
              id='password'
              type='password'
              name='password'
              defaultValue={TEST_PASSWORD}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-green focus:border-dark-green block w-full p-2.5'
              required
            />
          </div>
          <div className='flex'>
            <button
              type='submit'
              className='flex flex-1 w-full min-w-36 items-center justify-center rounded-md bg-blue-700 px-3 py-3.5 text-sm font-semibold text-white shadow-sm hover:opacity-50 sm:w-auto'
              disabled={pending}
            >
              {pending ? (
                <>
                  <svg
                    aria-hidden='true'
                    role='status'
                    className='inline w-4 h-4 me-3 text-grey animate-spin'
                    viewBox='0 0 100 101'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                      fill='#E5E7EB'
                    />
                    <path
                      d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                      fill='currentColor'
                    />
                  </svg>
                  {COMMON_BUTTON_LOGGING_IN}
                </>
              ) : (
                <>{COMMON_BUTTON_LOGIN}</>
              )}
            </button>
          </div>
          <div
            className='flex h-8 items-end space-x-1'
            aria-live='polite'
            aria-atomic='true'
          >
            {errorMessage && (
              <>
                <p className='text-sm text-light-red'>{errorMessage}</p>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
