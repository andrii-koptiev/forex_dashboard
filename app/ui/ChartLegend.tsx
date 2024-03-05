import { ChartLegendPayload } from 'types';

type Props = {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  payload?: ChartLegendPayload[];
};

const ChartLegend = ({ payload }: Props) => {
  return (
    <>
      {payload ? (
        <div className='flex justify-center gap-5'>
          {payload.map((item) => (
            <div key={item.id} className='flex items-center justify-center'>
              <div className='h-[7px]'>{item.iconEl}</div>
              <div className='sm-text-grey capitalize'>{item.value}</div>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default ChartLegend;
