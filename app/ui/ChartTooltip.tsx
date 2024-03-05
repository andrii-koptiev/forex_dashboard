import { formatCurrency } from 'utils';

type Props = {
  active?: boolean;
  payload?: any[];
};

const ChartTooltip = ({ active = false, payload }: Props) => {
  if (active && payload && payload.length) {
    return (
      <div className='bg-dark-blue rounded-md flex p-2.5 gap-2.5'>
        {payload.map((item) => (
          <div
            key={item.dataKey}
            className='flex flex-col justify-center items-center'
          >
            <div
              className={`text-base font-semibold ${item.dataKey === 'profit' ? 'text-light-green' : 'text-light-red'}`}
            >
              {formatCurrency(item.value)}
            </div>
            <div className='text-sm font-semibold text-beige capitalize'>
              {item.dataKey}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default ChartTooltip;
