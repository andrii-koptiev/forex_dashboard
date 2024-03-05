import { SelectTypeEnum } from 'enums';
import OverviewIcon from 'icons/OverviewIcon';
import { RouteParams } from 'types';
import {
  DEFAULT_PAGE,
  DEFAULT_PAGE_SIZE,
  OVERVIEW_HEADER_NAME,
  USER_SELECT_LEFT_LABEL_NAME,
  loadFilteredUserData,
} from 'utils';
import Select from './Select';

const Overview = async ({ params, searchParams }: RouteParams) => {
  const pageSize = searchParams?.pageSize || String(DEFAULT_PAGE_SIZE);
  const page = searchParams?.page || String(DEFAULT_PAGE);
  const query = searchParams?.query;
  const { activeUser, userSelectOptions } = await loadFilteredUserData({
    userId: params.id,
    query,
    pageSize,
    page,
  });

  console.log(activeUser);

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
        />
      </div>
    </div>
  );
};

export default Overview;
