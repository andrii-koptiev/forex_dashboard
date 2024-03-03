import { loadFilteredUserList } from 'utils/helpers';

const Table = async ({
  userId,
  query,
  page,
}: {
  userId: string;
  query: string;
  page: number;
}) => {
  const filteredUsers = await loadFilteredUserList(userId, query, page);

  return (
    <div>
      {filteredUsers.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default Table;
