import React, { useEffect } from "react";
import { useUserStore } from "../stores/useUserStore";
import type { User } from "../types/user";

export const UsersList: React.FC = () => {
  const { users, loading, error, fetchUsers, clearUsers } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <h2>Users</h2>
      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {users.length === 0 && !loading && <p>No users loaded.</p>}
      <ul>
        {users.map((u:User) => (
          <li key={u.id}>
            {u.name} — {u.email}
          </li>
        ))}
      </ul>
      <button onClick={clearUsers}>Clear Users</button>
    </div>
  );
};
