import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../features/UserSlice";
import UserForm from "./UserForm";
import { useState } from "react";

const UserList = () => {
  const users = useSelector((state: any) => state.form.users);
  const dispatch = useDispatch();
  const [editUser, setEditUser] = useState<any>(null);

  return (
    <>
      <h3 className="text-2xl font-bold mb-4">User List</h3>
      {editUser && (
        <UserForm
          initialData={editUser}
          onSubmit={() => setEditUser(null)}
          onCancel={() => setEditUser(null)}
        />
      )}
      <table className="table-auto w-full border-collapse mb-8">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Age</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0 ? (
            users.map((user: any) => (
              <tr key={user.id} className="text-center">
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.age}</td>
                <td className="border px-4 py-2">
                  <button
                    className="px-3 py-1 bg-blue-500 text-white rounded mr-2"
                    onClick={() => setEditUser(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded"
                    onClick={() => dispatch(deleteUser(user.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center py-4">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default UserList;