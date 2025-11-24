import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().min(3).required("name must be 3 character").max(10).required("name max be 10 character").required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),            
    password: Yup.string().min(6, 'Password must be at least 6 characters').matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character').required('Password is required'),
    age: Yup.number().min(0, 'Age must be a positive number').required('Age is required'),
    gender: Yup.string().oneOf(['male', 'female'], 'Select a valid  gender').required('Gender is required'),
    date: Yup.date().required('Date is required'),
    time: Yup.string().required('Time is required'),
    image: Yup.mixed().required('Image is required').test('fileType', 'Unsupported File Format', value => {
        if (value) {
            const supportedFormats = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif', 'image/SVG+xml','image/JPG'];
            return supportedFormats.includes(value.type);
        }   
        return false;
    }).test('fileSize', 'File too large', value => {
        if (value) {
            const maxSize = 2 * 1024 * 1024; // 2MB
            return value.size <= maxSize;
        }   
        return false;
    }),
    terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions').required('Terms must be accepted'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',   
            email: '',
            password: '',
            age: '',
            gender: '',
            date: '',
            time: '',
            image: null,
            terms: false,
        },  
        validationSchema: validationSchema,
        onSubmit: (values,{resetForm}) => {
            console.log('Form data', values);
            const result ={
                ...values,
                image: values.image ? values.image.name : null,
            }
            console.log('Submitted data', result);
            resetForm();        
            }       
        });     






  const inputClass = (field) => {
  let base = "w-full p-2 rounded border outline-none transition duration-300 ";
  const isTouched = formik.touched[field];
  const hasError = formik.errors[field];

    if(isTouched){
        if(hasError){
        return base + "border-red-500 placeholder:text-red-400";
        }else{
        return base + "border-green-500";
        }
    }


  return base + "border-gray-300";
};

const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue("image", file);
}

  return (
    <div className='min-h-screen bg-indigo-500 flex items-center justify-center px-4'>
        <div className='bg-white rounded-xl p-6 shadow-md w-full max-w-3xl'>
            <h2 className='text-2xl font-bold text-center text-indigo-700 mb-6'>User Registration Form</h2>
            <form className='space-y-5' onSubmit={formik.handleSubmit}>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor="" className='block mb-1 font-medium'>Name</label>
                        <input 
                        type="text"
                        name='name'
                        placeholder='Enter your name'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        className={inputClass("name")}
                        />
                         {
                        formik.touched.name && formik.errors.name ? (
                            <div className='text-sm text-red-500'>{formik.errors.name}</div>
                        ) : null
                    }
                    </div>
                   
                    <div>
                        <label htmlFor="" className='block mb-1 font-medium'>Email</label>
                        <input 
                        type="email"
                        name='email'
                        placeholder='Enter your email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className={inputClass("email")}
                        />
                        {
                        formik.touched.email && formik.errors.email ? (
                            <div className='text-sm text-red-500'>{formik.errors.email}</div>
                        ) : null
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
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        className={inputClass("password")}
                        />
                        {
                        formik.touched.password && formik.errors.password ? (
                            <div className='text-sm text-red-500'>{formik.errors.password}</div>
                        ) : null
                    }
                    </div>
                    <div>
                        <label htmlFor="" className='block mb-1 font-medium'>Age</label>
                        <input 
                        type="number"
                        name='age'
                        placeholder='Enter your age'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.age}
                        className={inputClass("age")}
                        />
                        {
                        formik.touched.age && formik.errors.age ? (
                            <div className='text-sm text-red-500'>{formik.errors.age}</div>
                        ) : null
                    }
                    </div>
                </div>

                <div className=''>
                    <label className='block mb-1 font-medium'>Gender</label>
                    <div className='flex gap-6'>
                    <div className='flex flex-row gap-2'>
                    <label className=''>Male</label>
                     <input type='radio' name='gender' value="male"
                      onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.gender==='male'}/>
                     </div>
                    <div className='flex flex-row gap-2'>
                     <label className=''>Female</label>
                     <input type='radio' name='gender' value="female" 
                     onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.gender==='female'}
                     />
                    </div>
                    </div>
                     {
                        formik.touched.gender && formik.errors.gender ? (
                            <div className='text-sm text-red-500'>{formik.errors.gender}</div>
                        ) : null
                    }                    
                </div>

                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor="" className='block mb-1 font-medium'>Date</label>
                        <input 
                        type="date"
                        name='date'
                        className={inputClass("date")}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.date}
                        />
                         {
                        formik.touched.date && formik.errors.date ? (
                            <div className='text-sm text-red-500'>{formik.errors.date}</div>
                        ) : null
                    }
                    </div>
                    <div>
                        <label htmlFor="" className='block mb-1 font-medium'>Time</label>
                        <input 
                        type="time"
                        name='time'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.time}
                        className={inputClass("time")}
                        />
                         {
                        formik.touched.time && formik.errors.time ? (
                            <div className='text-sm text-red-500'>{formik.errors.time}</div>
                        ) : null
                    }
                    </div>
                </div>

                <div>
                    <label htmlFor="" className='block mb-1 font-medium'>Image</label>
                    <input 
                    type="file"
                    name='image'
                    onChange={handleFileChange}
                        onBlur={formik.handleBlur}
                        // value={formik.values.image}
                    className={inputClass("image")}
                    />
                     {
                        formik.touched.image && formik.errors.image ? (
                            <div className='text-sm text-red-500'>{formik.errors.image}</div>
                        ) : null
                    }
                </div>

                <div>
                    <label className='flex items-center gap-2'>
                        <input type='checkbox' name='terms'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.terms}
                        />
                        I accept terms and conditions
                    </label>  
                     {
                        formik.touched.terms && formik.errors.terms ? (
                            <div className='text-sm text-red-500'>{formik.errors.terms}</div>
                        ) : null
                    }                   
                </div>

                <div>
                    <button type='submit' 
                    className='w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 
                    px-4 rounded cursor-pointer'>
                        Submit
                    </button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default FormikForm