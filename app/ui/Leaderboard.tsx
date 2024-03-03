import LeaderboardIcon from 'icons/LeaderboardIcon';
import { RouteParams } from 'types';
import { LEADERBOARD_HEADER_NAME, USERS_SEARCH_PLACEHOLDER } from 'utils';
import Search from './Search';
import Table from './Table';

const Leaderboard = ({ params, searchParams }: RouteParams) => {
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
        <div>Select</div>
        <div>
          <Search placeholder={USERS_SEARCH_PLACEHOLDER} />
        </div>
      </div>

      <Table userId={params.id} query={query} page={page} />
    </div>
  );
};

export default Leaderboard;
