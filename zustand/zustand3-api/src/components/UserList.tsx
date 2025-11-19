// src/components/users/UserList.tsx
import { useEffect, useState } from "react";
import UserForm from "./UserForm";
import { useAppStore } from "../store/useAppStore";
import { userApi } from "../api/userApi";

export default function UserList() {
  const { users, setUsers, deleteUser, setLoading, loading } = useAppStore();
  const [editUserId, setEditUserId] = useState<number | null>(null);

  const loadUsers = async () => {
    setLoading(true);
    const response = await userApi.getUsers();
    setUsers(response);
    setLoading(false);
  };

  useEffect(() => {
    if (users.length === 0) loadUsers();
  }, []);

  const handleDelete = async (id: number) => {
    await userApi.deleteUser(id);
    deleteUser(id);
  };

  if (loading) return <p>Loading Users...</p>;

  return (
    <div>
      <h2>Users</h2>

      <button onClick={() => setEditUserId(0)}>Add User</button>

      {editUserId !== null && (
        <UserForm
          editId={editUserId}
          close={() => setEditUserId(null)}
        />
      )}

      {users.map((u) => (
        <div key={u.id} style={{ marginTop: 10 }}>
          <strong>{u.name}</strong> — {u.email}
          <button onClick={() => setEditUserId(u.id)} style={{ marginLeft: 10 }}>
            Edit
          </button>
          <button
            onClick={() => handleDelete(u.id)}
            style={{ marginLeft: 10, color: "red" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
