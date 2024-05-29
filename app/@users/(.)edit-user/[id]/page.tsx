import Modal from 'app/ui/Modal';
import AddUserModal from 'app/ui/features/usersTable/AddEditUserModal';
import { RouteParams } from 'types';

export default function Page({ params }: RouteParams) {
  const { id } = params;
  return (
    <Modal>
      <AddUserModal userId={id} />
    </Modal>
  );
}
