import { User, UserData } from 'types';

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
