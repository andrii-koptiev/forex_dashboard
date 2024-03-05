import { SelectTypeEnum } from 'enums';
import OverviewIcon from 'icons/OverviewIcon';

import {
  OVERVIEW_HEADER_NAME,
  USER_SELECT_LEFT_LABEL_NAME,
  loadSelectedUser,
} from 'utils';
import Select from './Select';

type Props = {
  userId: string;
};

const Overview = async ({ userId }: Props) => {
  const { selectedUser, userSelectOptions } = await loadSelectedUser(userId);

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
          selectWidth={40}
          selectedUser={selectedUser}
        />
      </div>
    </div>
  );
};

export default Overview;
