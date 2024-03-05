import { ChartData } from 'types';

export interface SelectedUser {
  id: string;
  fullName: string;
  profit: number;
  loss: number;
  balance: number;
  chartData: ChartData[];
}
