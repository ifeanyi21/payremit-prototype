import { useState } from 'react';
import users from '../../data/users';

const UserDirectory = () => {
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setFilteredUsers(
      users.filter(user =>
        user.firstName.toLowerCase().includes(value) ||
        user.lastName.toLowerCase().includes(value) ||
        user.email.toLowerCase().includes(value)
      )
    );
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">User Directory</h1>
      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={handleSearch}
        className="w-full p-2 mb-4 border rounded"
      />
      <ul className="bg-white p-4 rounded shadow">
        {filteredUsers.map(user => (
          <li key={user.id} className="py-2 border-b">
            <a href={`/admin/user/${user.id}`} className="text-blue-500 hover:underline">
              {user.firstName} {user.lastName} (ID: {user.id}, EMAIL: {user.email}, KYC: {user.kyc})
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDirectory;
