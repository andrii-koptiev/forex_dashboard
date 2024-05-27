import { UsersTableColumnNameEnum, UsersTableColumnSortQueryEnum } from 'enums';
import { TableHeaderData } from 'types';

export const usersTableHeaderData: TableHeaderData[] = [
  {
    columnName: UsersTableColumnNameEnum.USER,
    sortQuery: UsersTableColumnSortQueryEnum.NAME,
  },

  {
    columnName: UsersTableColumnNameEnum.PROFIT,
  },
  {
    columnName: UsersTableColumnNameEnum.LOSS,
  },
  {
    columnName: UsersTableColumnNameEnum.BALANCE,
  },
];
