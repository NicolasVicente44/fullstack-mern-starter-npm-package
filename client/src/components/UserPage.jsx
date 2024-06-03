import React, { useState, useEffect } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSaveUser = (user) => {
    const url = user._id ? `/api/users/${user._id}` : '/api/users';
    const method = user._id ? 'PUT' : 'POST';
    fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((savedUser) => {
        setUsers((prevUsers) =>
          user._id
            ? prevUsers.map((u) => (u._id === savedUser._id ? savedUser : u))
            : [...prevUsers, savedUser]
        );
        setEditingUser(null);
      });
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleDeleteUser = (id) => {
    fetch(`/api/users/${id}`, { method: 'DELETE' })
      .then(() => {
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      });
  };

  return (
    <div>
      <UserForm user={editingUser} onSave={handleSaveUser} />
      <UserList users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />
    </div>
  );
};

export default UserPage;
