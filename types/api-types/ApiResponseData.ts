import { FormattedUserDB } from './FormattedUserDB';

export interface ApiResponceData {
  users: FormattedUserDB;
  pagination: {
    totalUsers: number;
    buttons: number[];
    displayedInfo: number[];
  };
}
