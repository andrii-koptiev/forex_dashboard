import RemoveUserModal from 'app/ui/features/usersTable/RemoveUserModal';
import { RouteParams } from 'types';

export default function Page({ params }: RouteParams) {
  const { id } = params;

  return <RemoveUserModal userId={id} />;
}
