import OverviewIcon from 'icons/OverviewIcon';
import { OVERVIEW_HEADER_NAME } from 'utils';

const Overview = () => {
  return (
    <div className={`user-info-section-container user-info-section-container`}>
      <div className='user-info-section-header-container'>
        <OverviewIcon />
        <div className='user-info-section-header-name'>
          {OVERVIEW_HEADER_NAME}
        </div>
      </div>

      <div className='user-info-section-top-bar-actions'>
        {/* <Select
          options={selectOptions}
          leftLabelName={USER_SELECT_LEFT_LABEL_NAME}
        /> */}
      </div>
    </div>
  );
};

export default Overview;
