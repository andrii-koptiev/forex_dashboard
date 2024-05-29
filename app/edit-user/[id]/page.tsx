import AddEditUserModal from 'app/ui/features/usersTable/AddEditUserModal';

import { RouteParams } from 'types';

export default function Page({ params }: RouteParams) {
  const { id } = params;

  return <AddEditUserModal userId={id} />;
}
