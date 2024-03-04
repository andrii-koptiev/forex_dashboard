import {
  SearchParamsEnum,
  SortOrderEnum,
  UsersTableColumnNameEnum,
} from 'enums';
import { SelectOption, User } from 'types';
import { ApiResponceData, FormattedUserDB, UserDB } from 'types/api-types';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, loadInitialUserId } from 'utils';

export const getSumFormArray = (dataArray: number[]): number =>
  Math.abs(dataArray.reduce((acc, curr) => acc + curr));

export const formatUsersData = (users: UserDB[]): FormattedUserDB[] => {
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

export const getFromToUsers = (
  chunked: FormattedUserDB[],
  filtered: FormattedUserDB[],
): number[] => {
  if (!chunked.length || !filtered.length) {
    return [];
  }

  const firstChunkedUserId = chunked[0]?.id;
  const lastChunkedUserId = chunked.at(-1)?.id;

  const fromIndex = filtered.findIndex(
    (user) => user.id === firstChunkedUserId,
  );
  const toIndex = filtered.findIndex((user) => user.id === lastChunkedUserId);

  return [fromIndex + 1, toIndex + 1];
};

export const sortUsersBy = (
  users: FormattedUserDB[],
  sortBy: string | null,
  order: string | null,
): User[] => {
  if (!users.length) {
    return [];
  }

  if (sortBy === UsersTableColumnNameEnum.USER) {
    return order === SortOrderEnum.ASC
      ? [...users].sort((a, b) => a.fullName.localeCompare(b.fullName))
      : [...users].sort((a, b) => b.fullName.localeCompare(a.fullName));
  }

  if (sortBy === UsersTableColumnNameEnum.PROFIT) {
    return order === SortOrderEnum.ASC
      ? [...users].sort((a, b) => a.profit - b.profit)
      : [...users].sort((a, b) => b.profit - a.profit);
  }

  if (sortBy === UsersTableColumnNameEnum.LOSS) {
    return order === SortOrderEnum.DESC
      ? [...users].sort((a, b) => a.loss - b.loss)
      : [...users].sort((a, b) => b.loss - a.loss);
  }

  if (sortBy === UsersTableColumnNameEnum.BALANCE) {
    return order === SortOrderEnum.ASC
      ? [...users].sort((a, b) => a.balance - b.balance)
      : [...users].sort((a, b) => b.balance - a.balance);
  }

  return users;
};

export const getPaginationData = (
  users: FormattedUserDB[],
  chunked: FormattedUserDB[][],
  page: string,
): ApiResponceData['pagination'] => {
  const totalFilteredUsers = users.length;
  const paginationButtons = chunked.map((_, i) => i + 1);
  const displayedFromTo = getFromToUsers(
    chunked[Number(page) - 1] || [],
    users,
  );
  return {
    totalUsers: totalFilteredUsers,
    buttons: paginationButtons,
    displayedInfo: displayedFromTo,
  };
};
