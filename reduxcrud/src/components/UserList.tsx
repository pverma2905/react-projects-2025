import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../features/formSlice";
import React from "react";

const UserList = ({ onEdit }: any) => {
    const users = useSelector((state: any) => state.form.users);
    const dispatch = useDispatch();

    return (
        <div>
            <h3>User List</h3>
            <ul>
                {users.map((user: any) => (
                    <li key={user.id}>
                        {user.name} | {user.email} | {user.age}
                        <button onClick={() => onEdit(user)}>Edit</button>
                        <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;