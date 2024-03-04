import { SearchParamsEnum } from 'enums';
import { SelectOption, User, UserData } from 'types';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, loadInitialUserId } from 'utils';

export const getSumFormArray = (dataArray: number[]): number =>
  Math.abs(dataArray.reduce((acc, curr) => acc + curr));

export const formatUsersData = (users: UserData[]): User[] => {
  return users.map((user) => {
    const profitAmount = getSumFormArray(user.profit);
    const lossAmount = getSumFormArray(user.loss);
    const balanceAmount = profitAmount - lossAmount;

    return {
      id: user.id,
      fullName: `${user.name} ${user.lastname}`,
      profit: profitAmount,
      loss: lossAmount,
      balance: balanceAmount,
    };
  });
};

export const formatCurrency = (amount: number): string => {
  const absNumber = Math.abs(amount);
  return absNumber.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

export const getPageSizeSelectOptions = (
  start: number,
  end: number,
  step = 1,
): SelectOption[] => {
  let i = start;
  const options: SelectOption[] = [];

  while (i <= end) {
    options.push({
      value: String(i),
      name: String(i),
    });
    i++;
  }

  return options;
};

export const getInitialRedirectUrl = async (): Promise<string> => {
  const initialUserId = await loadInitialUserId();
  const initialPageSize = DEFAULT_PAGE_SIZE;
  const initialPage = DEFAULT_PAGE;

  return `${process.env.BASE_URL}/users/${initialUserId}?${SearchParamsEnum.PAGE_SIZE}=${initialPageSize}&${SearchParamsEnum.PAGE}=${initialPage}`;
};
