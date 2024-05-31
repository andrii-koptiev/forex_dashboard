import { UsersTableColumnNameEnum, UsersTableColumnSortQueryEnum } from 'enums';

export interface TableHeaderData {
  columnName: UsersTableColumnNameEnum;
  sortQuery?: UsersTableColumnSortQueryEnum;
}
