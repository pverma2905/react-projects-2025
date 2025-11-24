import React from 'react'

const FormUi = () => {
  const inputClass = () => {
  let base = "w-full p-2 rounded border outline-none transition duration-300 ";
  return base + "border-gray-300";
};

  return (
    <div className='min-h-screen bg-indigo-500 flex items-center justify-center px-4'>
        <div className='bg-white rounded-xl p-6 shadow-md w-full max-w-3xl'>
            <h2 className='text-2xl font-bold text-center text-indigo-700 mb-6'>User Registration Form</h2>
            <form className='space-y-5'>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor="" className='block mb-1 font-medium'>Name</label>
                        <input 
                        type="text"
                        name='name'
                        placeholder='Enter your name'
                        className={inputClass()}
                        />
                    </div>
                    <div>
                        <label htmlFor="" className='block mb-1 font-medium'>Email</label>
                        <input 
                        type="email"
                        name='email'
                        placeholder='Enter your email'
                        className={inputClass()}
                        />
                    </div>
                </div>

                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor="" className='block mb-1 font-medium'>Password</label>
                        <input 
                        type="password"
                        name='password'
                        placeholder='At least 6 characters with special symbol'
                        className={inputClass()}
                        />
                    </div>
                    <div>
                        <label htmlFor="" className='block mb-1 font-medium'>Age</label>
                        <input 
                        type="number"
                        name='age'
                        placeholder='Enter your age'
                        className={inputClass()}
                        />
                    </div>
                </div>

                <div className=''>
                    <label className='block mb-1 font-medium'>Gender</label>
                    <div className='flex gap-6'>
                    <div className='flex flex-row gap-2'>
                    <label className=''>Male</label>
                     <input type='radio' name='gender' value="male" />
                     </div>
                    <div className='flex flex-row gap-2'>
                     <label className=''>Female</label>
                     <input type='radio' name='gender' value="female" />
                    </div>
                    </div>                    
                </div>

                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor="" className='block mb-1 font-medium'>Date</label>
                        <input 
                        type="date"
                        name='date'
                        className={inputClass()}
                        />
                    </div>
                    <div>
                        <label htmlFor="" className='block mb-1 font-medium'>Time</label>
                        <input 
                        type="time"
                        name='time'
                        className={inputClass()}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="" className='block mb-1 font-medium'>Image</label>
                    <input 
                    type="file"
                    name='imamge'
                    className={inputClass()}
                    />
                </div>

                <div>
                    <label className='flex items-center gap-2'>
                        <input type='checkbox' name='terms'/>
                        I accept terms and conditions
                    </label>                     
                </div>

                <div>
                    <button type='submit' 
                    className='w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded'>
                        Submit
                    </button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default FormUi