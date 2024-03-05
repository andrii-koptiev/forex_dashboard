import { ChartDataDB } from './ChartdDataBD';

export interface SelectedUserDB {
  id: string;
  fullName: string;
  profit: number;
  loss: number;
  balance: number;
  chartData: ChartDataDB[];
}
