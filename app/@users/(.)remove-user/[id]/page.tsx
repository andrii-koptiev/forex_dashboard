import Modal from 'app/ui/Modal';
import RemoveUserModal from 'app/ui/features/usersTable/RemoveUserModal';
import { RouteParams } from 'types';

export default function Page({ params }: RouteParams) {
  const { id } = params;
  return (
    <Modal>
      <RemoveUserModal userId={id} />
    </Modal>
  );
}
