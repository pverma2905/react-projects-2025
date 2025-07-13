import { useDispatch } from "react-redux";
import { saveUser, updateUser } from "../features/formSlice";
import { useState,useEffect } from "react";

const UserForm = ({ editUser, onFinishEdit }: any) => {
    const dispatch = useDispatch();
    const [form, setForm] = useState(
        editUser || { name: "", email: "", age: "" }
    );

    // Update form when editUser changes
    useEffect(() => {
        if (editUser) setForm(editUser);
        else setForm({ name: "", email: "", age: "" });
    }, [editUser]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev:any) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (form.id) {
            dispatch(updateUser(form));
            onFinishEdit();
        } else {
            dispatch(saveUser(form));
        }
        setForm({ name: "", email: "", age: "" });
    };

    return (
        <>
            <h3>{form.id ? "Edit User" : "User Form"}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="name" className="newline" />
                <input type="text" name="email" value={form.email} onChange={handleChange} placeholder="email" className="newline" />
                <input type="number" name="age" value={form.age} onChange={handleChange} placeholder="age" className="newline" />
                <button className="newline btn-color" type="submit">{form.id ? "Update" : "Submit"}</button>
            </form>
        </>
    );
};

export default UserForm;