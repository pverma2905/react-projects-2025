import React, { useState } from 'react'
import { userFormSchema, type FormErrors, type UserFormData } from './types/userForm'
import { set } from 'zod/v4'




export default function UserForm() {
    const [formData, setFormData] = useState<UserFormData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        age: 0,
        phone: '',
        gender: 'male'
    })

    const [errors, setErrors] = useState<FormErrors>({ })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: name === 'age' ? parseInt(value)|0 : value
        })

        setErrors((prev)=>({...prev, [name]:undefined})) // Clear error for the field being changed            
    }


    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const result = userFormSchema.safeParse(formData)
        if(!result.success) {
            setErrors(result.error.formErrors.fieldErrors) // Set errors if validation fails          
        }else{
            setErrors({}) // Clear errors if validation passes  
            console.log('Form is valid',formData)         
        }

        console.log('Form submitted:', formData)
    }


    return (
        <div className='bg-white p-4 rounded shadow-md w-1/2 mx-auto'>
            <h2 className='text-center font-semibold text-2xl'>UserForm</h2>
            <form onSubmit={onSubmitHandler} className='mt-4'>
                <div className='mb-4 flex flex-col'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' name='name' value={formData.name} 
                    onChange={handleChange}
                    className='border border-gray-500 rounded px-2 py-1' />
                    {errors.name && (
                        <span className='text-red-500 text-sm'>{errors.name}</span>
                    )}
                </div>

                <div className='mb-4 flex flex-col'>
                    <label htmlFor='name'>Email</label>
                    <input type='text' id='email' name='email' value={formData.email}
                    onChange={handleChange}
                        className='border border-gray-500 rounded px-2 py-1' />
                         {errors.email && (
                        <span className='text-red-500 text-sm'>{errors.email}</span>
                    )}
                </div>

                <div className='mb-4 flex flex-col'>
                    <label htmlFor='name'>Password</label>
                    <input type='text' id='password' name='password' value={formData.password}
                     onChange={handleChange}   className='border border-gray-500 rounded px-2 py-1' />
                      {errors.password && (
                        <span className='text-red-500 text-sm'>{errors.password}</span>
                    )}
                </div>

                <div className='mb-4 flex flex-col'>
                    <label htmlFor='name'>Confirm Password</label>
                    <input type='text' id='confirmPassword' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange}
                        className='border border-gray-500 rounded px-2 py-1' />
                        {errors.confirmPassword && (
                        <span className='text-red-500 text-sm'>{errors.confirmPassword}</span>
                    )}
                </div>

                <div className='mb-4 flex flex-col'>
                    <label htmlFor='name'>Age</label>
                    <input type='number' id='age' name='age' value={formData.age}
                     onChange={handleChange}   className='border border-gray-500 rounded px-2 py-1' />
                     {errors.confirmPassword && (
                        <span className='text-red-500 text-sm'>{errors.confirmPassword}</span>
                    )}
                </div>

                <div className='mb-4 flex flex-col'>
                    <label htmlFor='name'>Phone</label>
                    <input type='text' id='phone' name='phone' value={formData.phone}
                    onChange={handleChange}  className='border border-gray-500 rounded px-2 py-1' />
                    {errors.phone && (
                        <span className='text-red-500 text-sm'>{errors.phone}</span>
                    )}
                </div>

                <div className='mb-4 flex flex-col'>
                    <label htmlFor='name'>Name</label>
                    <select name="gender" id="gender" className='border border-gray-500 rounded px-2 py-1' onChange={handleChange} value={formData.gender}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.gender && (
                        <span className='text-red-500 text-sm'>{errors.gender}</span>
                    )}
                </div>
                <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center w-full'>
                    Submit
                </button>
            </form>
        </div>
    )
}
