import { User } from 'types';

export interface FilteredUsersResponse {
  users: User[];
  pagination: {
    buttons: number[];
    totalUsers: number;
    displayedInfo: number[];
  };
}
