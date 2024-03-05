import { InfoSectionTypeEnum } from 'enums';
import { formatCurrency } from 'utils';

type Props = {
  type: InfoSectionTypeEnum;
  amount: number;
};
const InfoSection = ({ type, amount }: Props) => {
  const getInfoSectionColor = (sectionType: InfoSectionTypeEnum): string => {
    switch (sectionType) {
      case InfoSectionTypeEnum.PROFIT:
        return 'text-light-green';
      case InfoSectionTypeEnum.LOSS:
        return 'text-light-red';
      case InfoSectionTypeEnum.BALANCE:
        return 'text-orange';
      default:
        return 'text-grey';
    }
  };
  return (
    <div className='flex flex-col gap-0.5 w-[212px] h-[67px] rounded-md bg-dark-blue p-2.5'>
      <div className='sm-text-grey capitalize'>{type}</div>
      <div className={`text-xl font-semibold ${getInfoSectionColor(type)}`}>
        {formatCurrency(amount, false)}
      </div>
    </div>
  );
};

export default InfoSection;
