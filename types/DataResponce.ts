import { User } from 'types';

export interface DataResponce {
  users: User[];
  pagination: {
    buttons: number[];
    totalUsers: number;
    displayedInfo: number[];
  };
}
