import CircleIcon from 'icons/CircleIcon';
import { ChartLegendPayload } from 'types';

const ChartLegend = () => {
  const legendPayload: ChartLegendPayload[] = [
    { value: 'Profit', id: 'Profit', iconEl: <CircleIcon fill={'#0FC2C0'} /> },
    { value: 'Loss', id: 'Loss', iconEl: <CircleIcon fill={'#FF3737'} /> },
  ];
  return (
    <div className='flex justify-center gap-5'>
      {legendPayload.map((item) => (
        <div key={item.id} className='flex items-center justify-center'>
          <div className='h-[7px]'>{item.iconEl}</div>
          <div className='sm-text-grey'>{item.value}</div>
        </div>
      ))}
    </div>
  );
};

export default ChartLegend;
