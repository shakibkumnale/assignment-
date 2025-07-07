import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch('/api/user');
        const data = await response.json();
        if (data.success) {
          setUsers(data.data || []);
        } else {
          setError('Failed to get users');
        }
      } catch (err) {
        setError('Server error');
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  if (loading) return <div className="text-center py-12">Loading users...</div>;
  if (error) return <div className="text-center py-12 text-red-600">{error}</div>;
  if (users.length === 0) return <div className="text-center py-12">No users yet</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default UserList; 