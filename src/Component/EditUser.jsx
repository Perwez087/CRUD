import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

const EditUser = () => {
  const { id } = useParams();
  const { users, updateUser } = useUserContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = users.find((user) => user.id === id);
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [id, users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(id, { name, email });
    navigate('/');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Edit User</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">
          Update User
        </button>
      </form>
    </div>
  );
};

export default EditUser;
