import { InfoSectionTypeEnum, SelectTypeEnum } from 'enums';
import OverviewIcon from 'icons/OverviewIcon';
import dynamic from 'next/dynamic';

import {
  OVERVIEW_HEADER_NAME,
  USER_SELECT_LEFT_LABEL_NAME,
  getSumFormArray,
  loadSelectedUser,
} from 'utils';
import InfoSection from './InfoSection';
import Select from './Select';

type Props = {
  userId: string;
};

const Chart = dynamic(() => import('./Chart'), { ssr: false });

const Overview = async ({ userId }: Props) => {
  const { selectedUser, userSelectOptions, chartData } =
    await loadSelectedUser(userId);

  const profitAmount = getSumFormArray(selectedUser.profit);
  const lossAmount = getSumFormArray(selectedUser.loss);
  const balanceAmount = profitAmount - lossAmount;

  return (
    <div className={`user-info-section-container user-info-section-container`}>
      <div className='user-info-section-header-container'>
        <OverviewIcon />
        <div className='user-info-section-header-name'>
          {OVERVIEW_HEADER_NAME}
        </div>
      </div>

      <div className='user-info-section-top-bar-actions flex-row-reverse'>
        <Select
          type={SelectTypeEnum.USER_SELECT}
          options={userSelectOptions}
          leftLabelName={USER_SELECT_LEFT_LABEL_NAME}
          selectedUser={selectedUser}
        />
      </div>
      <div className='flex w-full justify-between'>
        <div className='flex w-full h-full'>
          <Chart data={chartData} />
        </div>
        <div className='flex flex-col gap-4'>
          <InfoSection
            type={InfoSectionTypeEnum.PROFIT}
            amount={profitAmount}
          />
          <InfoSection type={InfoSectionTypeEnum.LOSS} amount={lossAmount} />
          <InfoSection
            type={InfoSectionTypeEnum.BALANCE}
            amount={balanceAmount}
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
