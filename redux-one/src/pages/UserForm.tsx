import { useState } from "react"
import { useDispatch } from "react-redux"
import { saveUser } from "../features/UserSlice"

const UserForm = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically dispatch an action to save the user
        console.log('User submitted:', formData)
        dispatch(saveUser({ ...formData, id: crypto.randomUUID() }))
        setFormData({ name: '', email: '', age: '' }) // Reset form after submission
    }
  return (
    <>
    
    <div className="flex flex-col justify-center items-center  gap-4 shadow-lg p-4 w-1/2 mx-auto my-auto">
      <h2 className="text-center mt-10 text-3xl text-red-600">Add User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="name" className="block border px-5 py-3 mt-3 w-96 rounded-2xl" />
                <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="email" className="block border px-5 py-3 mt-3 w-96 rounded-2xl" />
                <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="age" className="block border px-5 py-3 mt-3 w-96 rounded-2xl" />
                <button className="block border px-5 py-3 mt-3 mx-auto rounded-2xl  bg-blue-500 text-white " type="submit">Submit</button>
            </form>
    </div>
    
    </>
  )
}

export default UserForm