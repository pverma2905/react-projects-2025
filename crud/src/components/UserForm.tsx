import { useEffect, useState } from "react";

const UserForm = () => {
  const [objData, setObjData] = useState({
    name: "test",
    role: "admin",
  });

  useEffect(() => {
    // Optional: log or fetch on mount
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setObjData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User added:", objData);

    // Reset to default values after submit
    setObjData({
      name: "test",
      role: "admin",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow rounded">
      <div>
        <input
          type="text"
          name="name"
          value={objData.name}
          onChange={handleChange}
          placeholder="Enter name"
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <select
          name="role"
          value={objData.role}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        >
          <option value="">Select role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="guest">Guest</option>
        </select>
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add User
      </button>
    </form>
  );
};

export default UserForm;
