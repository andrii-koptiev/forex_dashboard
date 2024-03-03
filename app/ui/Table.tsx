import { loadFilteredUserList } from 'utils/helpers';

const Table = async ({
  userId,
  query,
  currentPage,
}: {
  userId: string;
  query: string;
  currentPage: number;
}) => {
  const filteredUsers = await loadFilteredUserList(userId, query, currentPage);

  return (
    <div>
      {filteredUsers.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default Table;
