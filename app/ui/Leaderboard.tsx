import {
  DEFAULT_PAGE,
  DEFAULT_PAGE_SIZE,
  LEADER_BOARD_HEADER_NAME,
  PAGE_SIZE_SELECT_LEFT_LABEL_NAME,
  PAGE_SIZE_SELECT_RIGHT_LABEL_NAME,
  USERS_SEARCH_PLACEHOLDER,
  getPageSizeSelectOptions,
} from 'utils';

import { SelectTypeEnum } from 'enums';
import Search from './Search';
import Select from './Select';
import Table from './UsersTable';
import LeaderBoardIcon from 'icons/LeaderBoardIcon';

type Props = {
  pageSize?: string;
  query?: string;
  page?: string;
  sortBy?: string;
  sortOrder?: string;
};

const LeaderBoard = ({ pageSize, page, query, sortBy, sortOrder }: Props) => {
  const selectOptions = getPageSizeSelectOptions(5, 20);
  return (
    <div className={`user-info-section-container user-info-section-container`}>
      <div className='user-info-section-header-container'>
        <LeaderBoardIcon />
        <div className='user-info-section-header-name'>
          {LEADER_BOARD_HEADER_NAME}
        </div>
      </div>

      <div className='user-info-section-top-bar-actions'>
        <Select
          type={SelectTypeEnum.PAGE_SIZE_SELECT}
          options={selectOptions}
          leftLabelName={PAGE_SIZE_SELECT_LEFT_LABEL_NAME}
          rightLabelName={PAGE_SIZE_SELECT_RIGHT_LABEL_NAME}
        />
        <Search placeholder={USERS_SEARCH_PLACEHOLDER} />
      </div>
      <Table
        page={page || String(DEFAULT_PAGE)}
        pageSize={pageSize || String(DEFAULT_PAGE_SIZE)}
        query={query}
        sortBy={sortBy}
        sortOrder={sortOrder}
      />
    </div>
  );
};

export default LeaderBoard;
