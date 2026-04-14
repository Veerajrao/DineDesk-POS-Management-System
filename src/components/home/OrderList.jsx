import React from 'react'
import { FaCheck } from "react-icons/fa"
import { FaCircle } from "react-icons/fa"
const OrderList = () => {
  return (
    <div>
        <div className='flex items-center gap-6 mb-4'>
            <button className='bg-[#f6b100] p-3 text-xl font-bold text-[#f5f5f5] rounded-lg'>AM</button>
            <div className='flex items-center justify-between w-[100%]'>
                <div  className='flex items-start flex-col gap-1'>
                    <h1 className='text-[#f5f5f5] text-lg font-semibold tracking-wide'>Sathvik Suvarna</h1>
                    <p className='text-[#ababab] text-sm'>8 items</p>
                </div>
                <div>
                    <p className='p-2 text-[#f6b100] border border-[#f6b100] rounded-lg '>Table No: 5</p>
                </div>
                <div className='flex items-start flex-col gap-2'>
                    <p className='text-green-600 px-4'><FaCheck className='inline mr-2'/>Ready</p>
                    <p className='text-[#ababab] text-sm'><FaCircle className='inline mr-2 text-green-600' />Ready to serve</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderList