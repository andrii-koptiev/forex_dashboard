'use client';

import { FC } from 'react';

import CircleIcon from 'icons/CircleIcon';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ChartData, ChartLegendPayload } from 'types';
import { formatChartYData } from 'utils';
import ChartLegend from './ChartLegend';
import ChartTooltip from './ChartTooltip';

type Props = {
  data: ChartData[];
};

const Chart: FC<Props> = ({ data }) => {
  const legendPayload: ChartLegendPayload[] = [
    { value: 'Profit', id: 'Profit', iconEl: <CircleIcon fill={'#0FC2C0'} /> },
    { value: 'Loss', id: 'Loss', iconEl: <CircleIcon fill={'#FF3737'} /> },
  ];
  return (
    <LineChart
      width={940}
      height={400}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid horizontal={false} stroke='#01303A' />
      <XAxis
        dataKey='name'
        stroke='#012030'
        strokeWidth={2}
        tick={{ fontSize: 14, fontWeight: 600, fill: '#A9A29C' }}
      />
      <YAxis
        stroke='#012030'
        strokeWidth={2}
        tickFormatter={(d) => formatChartYData(d)}
        tick={{ fontSize: 14, fontWeight: 600, fill: '#A9A29C' }}
        tickCount={data.length}
        domain={[0, 'dataMax + 20000']}
      />
      <Tooltip content={<ChartTooltip />} />
      <Legend payload={legendPayload} content={<ChartLegend />} />

      <Line
        type='linear'
        dataKey='profit'
        stroke='#0FC2C0'
        strokeWidth={2}
        dot={false}
        activeDot={{ r: 8 }}
      />
      <Line
        type='linear'
        dataKey='loss'
        stroke='#FF3737'
        strokeWidth={2}
        dot={false}
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

// Override console.error
// This is a hack to suppress the warning about missing defaultProps in recharts library as of version 2.12
// @link https://github.com/recharts/recharts/issues/3615
const error = console.error;
/* eslint-disable  @typescript-eslint/no-explicit-any */
console.error = (...args: any) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};

export default Chart;
