import React, { useState } from 'react'

const Register = () => {
    const[formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        role:""
});

const handlechange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
}

const handlesubmit = (e) =>{
    e.preventDefault();
    console.log(formData);
}

const hanldeRoleSelection =(selectedRole) => {
    setFormData({...formData,role: selectedRole});
}



  return (
    <div>
        <form onSubmit={handlesubmit}>
            <div>
                <label className='block text-[#ababab] mb-2 text-lg font-medium'>
                    Emoloyee Name:
                </label>
                <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                    <input type='text' 
                    name='name' 
                    value={formData.name}
                    onChange={handlechange}
                    placeholder='Enter Employee name'
                    className='bg-transparent flex-1 text-white focus:outline-none' required/>
                </div>
            </div>
            <div>
                <label className='block text-[#ababab] mb-2 mt-2 text-lg font-medium'>
                    Emoloyee Email:
                </label>
                <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                    <input type='email'
                    name='email' 
                    value={formData.email}
                    onChange={handlechange}
                    placeholder='Enter Employee Email'
                    className='bg-transparent flex-1 text-white focus:outline-none' required/>
                </div>
            </div>
            <div>
                <label className='block text-[#ababab] mb-2 mt-3 text-lg font-medium'>
                    Emoloyee phone:
                </label>
                <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                    <input type='number' 
                    name='phone' 
                    value={formData.phone}
                    onChange={handlechange}
                    placeholder='Enter Employee phone'
                    className='bg-transparent flex-1 text-white focus:outline-none' required/>
                </div>
            </div>
            <div>
                <label className='block text-[#ababab] mb-2 mt-3 text-lg font-medium'>
                    Password :
                </label>
                <div className="flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                    <input type='password' 
                    name='password' 
                    value={formData.password}
                    onChange={handlechange}
                    placeholder='Enter password'
                    className='bg-transparent flex-1 text-white focus:outline-none' required/>
                </div>
            </div>
            <div>
                <label className='block text-[#ababab] mb-1 mt-3 text-sm font-medium'>
                    Choose your role
                </label>
                <div className='flex items-center gap-3 mt-4'>
                    {["Waiter","Cashier","Admin"].map((role) => {
                        return (
                            <button 
                            key={role}
                            type='button'
                            onClick={() => hanldeRoleSelection(role)}
                            className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] ${formData.role === role ? "bg-yellow-400 text-black" : ""}`} 
                            >
                            {role}
                        </button>
                        )
                    })}
                </div>
            </div>
            <button type="submit" className='w-full rounded-lg mt-6 py-3 text-lg bg-yellow-400 text-gray-50 font-bold'>
                Sign Up
                </button> 

        </form>
    </div>
  )
}

export default Register