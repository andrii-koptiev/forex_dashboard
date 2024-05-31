import { UserActionEnum } from 'enums/api';
import { User } from 'types/User';

export interface UserRequest {
  action: UserActionEnum;
  userData?: Pick<User, 'name' | 'lastname' | 'profit' | 'loss'>;
}
