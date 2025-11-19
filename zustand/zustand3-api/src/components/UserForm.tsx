// src/components/users/UserForm.tsx
import { useEffect, useState } from "react";
import { useAppStore, type User } from "../store/useAppStore";
import { userApi } from "../api/userApi";


interface Props {
  editId: number; // 0 = new
  close: () => void;
}

export default function UserForm({ editId, close }: Props) {
  const { users, addUser, updateUser } = useAppStore();

  const editingUser: User | undefined = users.find((u) => u.id === editId);

  const [form, setForm] = useState<Partial<User>>({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (editingUser) setForm(editingUser);
  }, [editId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingUser) {
      const updated = await userApi.updateUser(editId, form);
      updateUser(updated);
    } else {
      const created = await userApi.createUser(form);
      addUser(created);
    }

    close();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
      <h3>{editingUser ? "Update User" : "Add User"}</h3>

      <input
        name="name"
        placeholder="Name"
        value={form.name || ""}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email || ""}
        onChange={handleChange}
        required
        style={{ marginLeft: 10 }}
      />

      <button type="submit" style={{ marginLeft: 10 }}>
        Save
      </button>
    </form>
  );
}
