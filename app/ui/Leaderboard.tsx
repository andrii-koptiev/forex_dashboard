import LeaderboardIcon from 'icons/LeaderboardIcon';
import { RouteParams } from 'types';
import {
  DEFAULT_PAGE,
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
  const pageSize = searchParams?.pageSize || String(DEFAULT_PAGE_SIZE);
  const page = searchParams?.page || String(DEFAULT_PAGE);
  const query = searchParams?.query;
  const sortBy = searchParams?.sortBy;
  const sortOrder = searchParams?.sortOrder;

  return (
    <div className={`user-info-section-container user-info-section-container`}>
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
        <Search placeholder={USERS_SEARCH_PLACEHOLDER} />
      </div>
      <Table
        userId={params.id}
        page={page}
        pageSize={pageSize}
        query={query}
        sortBy={sortBy}
        sortOrder={sortOrder}
      />
    </div>
  );
};

export default Leaderboard;
