import React from 'react'
import { useAppContext } from "../context/AppContext"
import { useUserContext } from "../context/UserContext";
const UserDetail = () => {
    const { user } = useAppContext();
    console.log("test",user)
    const { selectedUser } = useUserContext();
    console.log("selectedUser", selectedUser);
  return (
    <>
        <h2 className="text-xl font-bold mb-2">User Detail</h2>
        {selectedUser ? (
            <div className="border p-4 rounded">
            <p><strong>ID:</strong> {selectedUser.id}</p>
            <p><strong>Name:</strong> {selectedUser.name}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Username:</strong> {selectedUser.username}</p>
            <p><strong>Phone:</strong> {selectedUser.phone}</p>
            <p><strong>Website:</strong> {selectedUser.website}</p>
            </div>
        ) : (
            <p>No user selected</p>
        )}
    </>
  )
}

export default UserDetail