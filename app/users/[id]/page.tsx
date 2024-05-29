import Overview from 'app/ui/Overview';
import Link from 'next/link';
import { RouteParams } from 'types';
import { BACK_TO_LEADER_BOARD_BUTTON } from 'utils';

const UsersInfo = ({ params }: RouteParams) => {
  return (
    <div className='flex flex-col gap-9'>
      <Link
        href='/users'
        type='button'
        className='button text-dark-blue bg-beige w-48 text-center'
      >
        {BACK_TO_LEADER_BOARD_BUTTON}
      </Link>
      <Overview userId={params.id} />
    </div>
  );
};

export default UsersInfo;
