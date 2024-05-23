import Overview from 'app/ui/Overview';
import { RouteParams } from 'types';

const UsersInfo = ({ params }: RouteParams) => {
  return (
    <div className='flex flex-col gap-9'>
      <Overview userId={params.id} />
    </div>
  );
};

export default UsersInfo;
