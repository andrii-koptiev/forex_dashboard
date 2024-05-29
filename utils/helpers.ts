import { SearchParamsEnum } from 'enums';
import { ChartData, SelectOption, User } from 'types';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from 'utils';

export const getSumFormArray = (dataArray: number[]): number =>
  Math.abs(dataArray.reduce((acc, curr) => acc + curr, 0));

export const getChartData = (
  profit: User['profit'],
  loss: User['loss'],
): ChartData[] =>
  profit.map((amount, i) => ({
    name: String(i + 1),
    profit: amount,
    loss: Math.abs(loss[i]),
  }));

export const formatCurrency = (amount: number, isAbs = true): string => {
  const absNumber = isAbs ? Math.abs(amount) : amount;
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
  const initialPageSize = DEFAULT_PAGE_SIZE;
  const initialPage = DEFAULT_PAGE;

  return `${process.env.BASE_URL}/users?${SearchParamsEnum.PAGE_SIZE}=${initialPageSize}&${SearchParamsEnum.PAGE}=${initialPage}`;
};

export const getPaginationButtons = (
  totalUsersCount: number,
  pageSize: number,
) =>
  Array.from(
    { length: Math.ceil(totalUsersCount / pageSize) },
    (_, i) => i + 1,
  );

export const getUsersSelectOption = (
  userData: Pick<User, 'id' | 'fullName'>[],
): SelectOption[] => {
  if (!userData.length) {
    return [];
  }

  return userData.map((user) => ({ value: user.id, name: user.fullName }));
};

export const formatChartYData = (number: number): string => {
  if (number < 1000) {
    return number.toString();
  } else if (number < 1000000) {
    const formattedNumber = (number / 1000).toFixed(1);
    return formattedNumber.endsWith('.0')
      ? formattedNumber.slice(0, -2) + 'k'
      : formattedNumber + 'k';
  } else {
    const formattedNumber = (number / 1000000).toFixed(1);
    return formattedNumber.endsWith('.0')
      ? formattedNumber.slice(0, -2) + 'M'
      : formattedNumber + 'M';
  }
};
