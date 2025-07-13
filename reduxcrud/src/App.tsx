import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [editUser, setEditUser] = useState(null);

    return (
        <div>
            <UserForm editUser={editUser} onFinishEdit={() => setEditUser(null)} />
            <UserList onEdit={setEditUser} />
        </div>
    );
}

export default App
