'use client';

import { addUser } from 'app/actions/addUser';
import { editUser } from 'app/actions/editUser';
import { loadSelectedUser } from 'app/actions/loadSelectedUser';
import { AppCustomEventsEnum } from 'enums';
import { useCloseModalListeners } from 'hooks';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useRef, useState } from 'react';
import {
  ADD_USER_BUTTON,
  ADD_USER_LASTNAME_LABEL,
  ADD_USER_LOSS_LABEL,
  ADD_USER_MODAL_TITLE,
  ADD_USER_NAME_LABEL,
  ADD_USER_PROFIT_LABEL,
  COMMON_BUTTON_ADD,
  COMMON_BUTTON_ADDING,
  COMMON_BUTTON_CANCEL,
  COMMON_BUTTON_EDITING,
  COMMON_ERROR_MESSAGE,
  EDIT_USER_BUTTON,
  EDIT_USER_MODAL_TITLE,
  formatCurrency,
} from 'utils';

enum AmountTypeEnum {
  PROFIT = 'profit',
  LOSS = 'loss',
}

type Props = {
  userId?: string;
};

export const AddEditUserModal: FC<Props> = ({ userId }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const profitRef = useRef<HTMLInputElement>(null);
  const lossRef = useRef<HTMLInputElement>(null);

  const profitDataRef = useRef<number[]>([]);
  const profitButtonsSectionRef = useRef<HTMLDivElement>(null);

  const lossDataRef = useRef<number[]>([]);
  const lossButtonsSectionRef = useRef<HTMLDivElement>(null);

  useCloseModalListeners(router);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateButtonsSection = (amountType: AmountTypeEnum) => {
    const isProfit = amountType === AmountTypeEnum.PROFIT;
    const buttonsSection = isProfit
      ? profitButtonsSectionRef.current
      : lossButtonsSectionRef.current;

    if (buttonsSection) {
      buttonsSection.innerHTML = '';
      const data = isProfit ? profitDataRef.current : lossDataRef.current;

      data.forEach((amount, i) => {
        const button = document.createElement('button');
        button.className = `flex gap-2 rounded-lg px-2 py-0.5 font-semibold bg-dark-green ${isProfit ? 'text-light-green' : 'text-light-red'} `;

        button.onclick = isProfit
          ? () => handleRemoveProfit(i)
          : () => handleRemoveLoss(i);

        const buttonAmount = document.createElement('div');
        buttonAmount.textContent = formatCurrency(amount);
        buttonAmount.className = 'flex-1';

        const closeButton = document.createElement('div');
        closeButton.textContent = '✖';
        closeButton.className = `cursor-pointer ${isProfit ? 'text-light-red' : 'text-beige'} `;

        button.appendChild(buttonAmount);
        button.appendChild(closeButton);

        buttonsSection.appendChild(button);
      });
    }
  };

  const handleAddProfit = () => {
    if (!profitRef?.current?.value) {
      return;
    }

    profitDataRef.current.push(Number(profitRef.current.value));
    updateButtonsSection(AmountTypeEnum.PROFIT);
    profitRef.current.value = '';
  };

  const handleRemoveProfit = (index: number) => {
    profitDataRef.current.splice(index, 1);
    updateButtonsSection(AmountTypeEnum.PROFIT);
  };

  const handleAddLoss = () => {
    if (!lossRef?.current?.value) {
      return;
    }

    lossDataRef.current.push(Number(-lossRef.current.value));
    updateButtonsSection(AmountTypeEnum.LOSS);
    lossRef.current.value = '';
  };

  const handleRemoveLoss = (index: number) => {
    lossDataRef.current.splice(index, 1);
    updateButtonsSection(AmountTypeEnum.LOSS);
  };

  const handleCancel = () => router.back();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!nameRef.current?.value || !lastnameRef.current?.value) {
      return;
    }

    const userData = {
      name: nameRef.current.value,
      lastname: lastnameRef.current.value,
      profit: profitDataRef.current,
      loss: lossDataRef.current,
    };

    setIsLoading(true);

    try {
      userId ? await editUser(userId, userData) : await addUser(userData);

      setIsLoading(false);
      document.dispatchEvent(new Event(AppCustomEventsEnum.UPDATE_USERS_TABLE));
      router.back();
    } catch (e) {
      setIsLoading(false);
      console.error(e);
      throw new Error(COMMON_ERROR_MESSAGE);
    }
  };

  useEffect(() => {
    const loadUserData = async () => {
      if (userId) {
        try {
          const { selectedUser: editedUser } = await loadSelectedUser(userId);

          if (nameRef.current) {
            nameRef.current.value = editedUser.name;
          }

          if (lastnameRef.current) {
            lastnameRef.current.value = editedUser.lastname;
          }

          if (profitDataRef) {
            profitDataRef.current = editedUser.profit;
            updateButtonsSection(AmountTypeEnum.PROFIT);
          }

          if (lossDataRef) {
            lossDataRef.current = editedUser.loss;
            updateButtonsSection(AmountTypeEnum.LOSS);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    loadUserData();
  }, [updateButtonsSection, userId]);

  return (
    <div
      className='relative z-10'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'
      id='blur'
    >
      <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>

      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <div className='relative transform max-w-[600px] rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full'>
            <div className='mt-3 text-center sm:ml-12  sm:text-left'>
              <h3
                className='text-lg font-semibold leading-6 text-gray-900'
                id='add-user-modal-title'
              >
                {userId ? EDIT_USER_MODAL_TITLE : ADD_USER_MODAL_TITLE}
              </h3>
            </div>
            <form className='px-12 py-8' onSubmit={handleSubmit}>
              <div className='mb-5'>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-medium'
                >
                  {ADD_USER_NAME_LABEL}
                </label>
                <input
                  type='text'
                  id='name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-green focus:border-dark-green block w-full p-2.5'
                  ref={nameRef}
                  required
                />
              </div>
              <div className='mb-5'>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  {ADD_USER_LASTNAME_LABEL}
                </label>
                <input
                  type='text'
                  id='lastname'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-green focus:border-dark-green block w-full p-2.5'
                  ref={lastnameRef}
                  required
                />
              </div>

              <div className='mb-5'>
                <label
                  htmlFor='profit'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  {ADD_USER_PROFIT_LABEL}
                </label>
                <div className='flex gap-2 items-center justify-between mb-2'>
                  <input
                    type='number'
                    name='profit'
                    id='profit'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-dark-green focus:border-dark-green block w-full p-2.5'
                    placeholder='20000'
                    ref={profitRef}
                  />
                  <button
                    onClick={handleAddProfit}
                    type='button'
                    className='button text-beige bg-dark-green'
                  >
                    {COMMON_BUTTON_ADD}
                  </button>
                </div>
                <div
                  ref={profitButtonsSectionRef}
                  className='flex gap-2 flex-wrap'
                />
              </div>

              <div className='mb-5'>
                <label
                  htmlFor='loss'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  {ADD_USER_LOSS_LABEL}
                </label>
                <div className='flex gap-2 items-center justify-between mb-2'>
                  <input
                    type='number'
                    name='loss'
                    id='loss'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-dark-green focus:border-dark-green block w-full p-2.5'
                    placeholder='10000'
                    ref={lossRef}
                  />
                  <button
                    onClick={handleAddLoss}
                    type='button'
                    className='button text-beige bg-dark-green'
                  >
                    {COMMON_BUTTON_ADD}
                  </button>
                </div>
                <div
                  ref={lossButtonsSectionRef}
                  className='flex gap-2 flex-wrap'
                />
              </div>

              <div className='flex'>
                <button
                  onClick={handleCancel}
                  disabled={isLoading}
                  type='button'
                  className='flex-1 before:mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                >
                  {COMMON_BUTTON_CANCEL}
                </button>
                <button
                  type='submit'
                  disabled={isLoading}
                  className='flex flex-1 w-full min-w-36 items-center justify-center rounded-md bg-light-red px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-50 sm:ml-3 sm:w-auto'
                >
                  {isLoading ? (
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
                      {userId ? COMMON_BUTTON_EDITING : COMMON_BUTTON_ADDING}
                    </>
                  ) : (
                    <>{userId ? EDIT_USER_BUTTON : ADD_USER_BUTTON}</>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEditUserModal;
