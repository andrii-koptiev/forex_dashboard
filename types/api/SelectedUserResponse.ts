import { ChartData, SelectOption, User } from 'types';

export interface SelectedUserResponse {
  userSelectOptions: SelectOption[];
  selectedUser: User;
  chartData: ChartData[];
}
