import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const HookForm = () => {

     const validationSchema = Yup.object({
        name: Yup.string().min(3).required("name must be 3 character").max(10).required("name max be 10 character").required('Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),            
        password: Yup.string().min(6, 'Password must be at least 6 characters').matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character').required('Password is required'),
        age: Yup.number().transform((value,orginValue)=>orginValue.trim()===""?undefined:Number(orginValue)).min(0, 'Age must be a positive number').required('Age is required'),
        gender: Yup.string().oneOf(['male', 'female'], 'Select a valid  gender').required('Gender is required'),
        date: Yup.string().required('Date is required'),
        time: Yup.string().required('Time is required'),
        image: Yup.mixed().required('Image is required').test('fileType', 'Unsupported File Format', value => {
            if (value && value.length && value[0]) {
                const supportedFormats = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif', 'image/SVG+xml','image/JPG'];
                return supportedFormats.includes(value[0].type);
            }   
            return false;
        }).test('fileSize', 'File too large', value => {
            if (value) {
                const maxSize = 2 * 1024 * 1024; // 2MB
                return value && value.length && value[0].size <= maxSize;
            }   
            return false;
        }),
        terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions').required('Terms must be accepted'),
        });


        const {register,
            handleSubmit,
            reset,
            formState:{errors, touchedFields},
        } = useForm({
            resolver: yupResolver(validationSchema),
            mode: "onBlur",
             reValidateMode: "onChange",
        }); 

       const onSubmit = (data) => {
            
            const result ={
                ...data,
                image: data.image[0].name
            }
            console.log('Submitted data', result);
            reset();        
            }      


    


  const inputClass = (field) => {
  let base = "w-full p-2 rounded border outline-none transition duration-300 ";
  const isTouched = touchedFields[field];
  const hasError = errors[field];

    if(isTouched || hasError){
        if(hasError){
        return base + "border-red-500 placeholder:text-red-400";
        }else{
        return base + "border-green-500";
        }
    }


  return base + "border-gray-300";
};
  return (
    <div className='min-h-screen bg-indigo-500 flex items-center justify-center px-4'>
        <div className='bg-white rounded-xl p-6 shadow-md w-full max-w-3xl'>
            <h2 className='text-2xl font-bold text-center text-indigo-700 mb-6'>User Registration Form</h2>
            <form className='space-y-5' onSubmit={handleSubmit(onSubmit)}>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor="" className='block mb-1 font-medium'>Name</label>
                        <input 
                        type="text"
                        name='name'
                        placeholder='Enter your name'
                        className={inputClass("name")}
                        {...register('name')}
                        />
                        {errors.name && 
                        <p className='text-red-500 mt-1 text-sm'>{errors.name.message}</p>
                        }
                    </div>
                    <div>
                        <label htmlFor="" className='block mb-1 font-medium'>Email</label>
                        <input 
                        type="email"
                        name='email'
                        placeholder='Enter your email'
                        className={inputClass("email")}
                        {...register('email')}
                        />
                        {errors.email && 
                        <p className='text-red-500 mt-1 text-sm'>{errors.email.message}</p>
                        }
                    </div>
                </div>

                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor="" className='block mb-1 font-medium'>Password</label>
                        <input 
                        type="password"
                        name='password'
                        placeholder='At least 6 characters with special symbol'
                        className={inputClass("password")}
                        {...register('password')}
                        />
                        {errors.password && 
                        <p className='text-red-500 mt-1 text-sm'>{errors.password.message}</p>
                        }
                    </div>
                    <div>
                        <label htmlFor="" className='block mb-1 font-medium'>Age</label>
                        <input 
                        type="number"
                        name='age'
                        placeholder='Enter your age'
                        className={inputClass("age")}
                        {...register('age')}
                        />
                        {errors.age && 
                        <p className='text-red-500 mt-1 text-sm'>{errors.age.message}</p>
                        }
                    </div>
                </div>

                <div className=''>
                    <label className='block mb-1 font-medium'>Gender</label>
                    <div className='flex gap-6'>
                    <div className='flex flex-row gap-2'>
                    <label className=''>Male</label>
                     <input type='radio' name='gender' value="male" {...register('gender')} />
                     </div>
                    <div className='flex flex-row gap-2'>
                     <label className=''>Female</label>
                     <input type='radio' name='gender' value="female" {...register('gender')} />
                    </div>
                    </div>
                    {errors.gender && 
                        <p className='text-red-500 mt-1 text-sm'>{errors.gender.message}</p>
                        }                    
                </div>

                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor="" className='block mb-1 font-medium'>Date</label>
                        <input 
                        type="date"
                        name='date'
                        className={inputClass("date")}
                        {...register('date')}
                        />
                        {errors.date && 
                        <p className='text-red-500 mt-1 text-sm'>{errors.date.message}</p>
                        }
                    </div>
                    <div>
                        <label htmlFor="" className='block mb-1 font-medium'>Time</label>
                        <input 
                        type="time"
                        name='time'
                        className={inputClass("time")}
                        {...register('time')}

                        />
                        {errors.time && 
                        <p className='text-red-500 mt-1 text-sm'>{errors.time.message}</p>
                        }
                    </div>
                </div>

                <div>
                    <label htmlFor="" className='block mb-1 font-medium'>Image</label>
                    <input 
                    type="file"
                    name='image'
                    className={inputClass("image")}
                    {...register('image')}
                    />
                    {errors.image && 
                        <p className='text-red-500 mt-1 text-sm'>{errors.image.message}</p>
                        }
                </div>

                <div>
                    <label className='flex items-center gap-2'>
                        <input type='checkbox' name='terms'
                        {...register('terms')}
                        />
                        I accept terms and conditions
                    </label> 
                    {errors.terms && 
                        <p className='text-red-500 mt-1 text-sm'>{errors.terms.message}</p>
                        }                    
                </div>

                <div>
                    <button type='submit' 
                    className='w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded cursor-pointer'>
                        Submit
                    </button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default HookForm