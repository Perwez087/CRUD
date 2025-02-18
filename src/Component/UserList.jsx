import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { FiEdit, FiTrash2 } from "react-icons/fi"; 

const UserList = () => {
  const { users, deleteUser } = useUserContext();

  return (
    <div className="min-h-screen bg-light p-8">
      <h1 className="text-4xl font-bold text-dark mb-8">User List</h1>
      <Link
        to="/add"
        className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-indigo-600 transition duration-300"
      >
        Add User
      </Link>
      <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2">{user.name}</h2>
            <p className="text-gray-600 mb-4">{user.email}</p>
            <div className="flex justify-end gap-4">
              <Link
                to={`/edit/${user.id}`}
                className="text-primary flex items-center gap-1 hover:underline hover:text-blue-500 duration-300 cursor-pointer"
              >
                <FiEdit />
              </Link>
              <button
                onClick={() => deleteUser(user.id)}
                className="text-danger flex items-center gap-1 hover:underline hover:text-red-600 cursor-pointer duration-300"
              >
                <FiTrash2 />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
