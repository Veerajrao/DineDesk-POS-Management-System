import React from 'react'
import { FaCheck } from "react-icons/fa"
import { FaCircle } from "react-icons/fa"
const OrderCart = () => {
  return (
    <div className='w-[432px] bg-[#262626] p-7 rounded-lg mb-4'>
        <div className='flex items-center gap-5'>
            <button className='bg-[#f6b100] p-3 text-xl font-bold text-[#f5f5f5] rounded-lg'>AM</button>
            <div className='flex items-center justify-between w-[100%]'>
                    <div  className='flex items-start flex-col gap-1'>
                        <h1 className='text-[#f5f5f5] text-lg font-semibold tracking-wide'>Sathvik Suvarna</h1>
                        <p className='text-[#ababab] text-sm'>#101 Dinein</p>
                    </div>
                    
                    <div className='flex items-end flex-col gap-2'>
                        <p className='text-green-600 px-2 py-1 bg-[#2e4a40] rounded-lg'><FaCheck className='inline mr-2'/>Ready</p>
                        <p className='text-[#ababab] text-sm'><FaCircle className='inline mr-2 text-green-600' />Ready to serve</p>
                    </div>
            </div>
        </div>
            <div className='flex justify-between items-center mt-4 text-[#ababab]'>
                <p>January 18,2026 08:32 PM</p>
                <p>8 items</p>
            </div>
        <hr className='w-full mt-4 border-t-1 border-gray-500'></hr>
        <div className='flex items-center justify-between mt-3'>
            <h1 className='text-[#f5f5f5] font-semibold text-lg'>Total</h1>
            <p className='text-[#f5f5f5] text-lg font-semibold'>₹ 250.00</p>
        </div>
    </div>
  )
}

export default OrderCart