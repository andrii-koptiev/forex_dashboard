import LeaderboardIcon from 'icons/LeaderboardIcon';
import { RouteParams } from 'types';
import {
  DEFAULT_PAGE_SIZE,
  LEADERBOARD_HEADER_NAME,
  PAGE_SIZE_SELECT_LEFT_LABEL_NAME,
  PAGE_SIZE_SELECT_RIGHT_LABEL_NAME,
  USERS_SEARCH_PLACEHOLDER,
  getPageSizeSelectOptions,
} from 'utils';
import Search from './Search';
import Select from './Select';
import Table from './Table';

const Leaderboard = ({ params, searchParams }: RouteParams) => {
  const selectOptions = getPageSizeSelectOptions(5, 20);
  const pageSize = Number(searchParams?.pageSize) || DEFAULT_PAGE_SIZE;
  const query = searchParams?.query || '';
  const page = Number(searchParams?.page) || 1;
  return (
    <div
      className={`user-info-section-container user-info-section-container-leaderboard`}
    >
      <div className='user-info-section-header-container'>
        <LeaderboardIcon />
        <div className='user-info-section-header-name'>
          {LEADERBOARD_HEADER_NAME}
        </div>
      </div>

      <div className='user-info-section-top-bar-actions'>
        <Select
          options={selectOptions}
          leftLabelName={PAGE_SIZE_SELECT_LEFT_LABEL_NAME}
          rigthLabelName={PAGE_SIZE_SELECT_RIGHT_LABEL_NAME}
        />
        <div>
          <Search placeholder={USERS_SEARCH_PLACEHOLDER} />
        </div>
      </div>

      <Table userId={params.id} query={query} page={page} pageSize={pageSize} />
    </div>
  );
};

export default Leaderboard;
