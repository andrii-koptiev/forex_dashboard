import Button from 'app/ui/Button';
import Overview from 'app/ui/Overview';
import { RouteParams } from 'types';
import { BACK_TO_LEADER_BOARD_BUTTON } from 'utils';

const UsersInfo = ({ params }: RouteParams) => {
  return (
    <div className='flex flex-col gap-9'>
      <Button buttonText={BACK_TO_LEADER_BOARD_BUTTON} hrefLink='/users' />
      <Overview userId={params.id} />
    </div>
  );
};

export default UsersInfo;
