import React from 'react'
import { IoReorderThreeSharp } from "react-icons/io5";
import { MdMoreVert } from "react-icons/md";
import { MdTableRestaurant } from "react-icons/md";
import { BiSolidDish } from "react-icons/bi";
import { IoIosHome } from "react-icons/io";
const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-12 flex justify-around">
        <button className=" flex items-center justify-center text-[#ababab] bg-[#363636] w-[200px] rounded-[20px]">
            <IoIosHome className='inline mr-2' size={22} /><p>Home</p></button>
        <button  className="flex items-center justify-center text-[#ababab] bg-[#363636] w-[200px] rounded-[20px]">
            <IoReorderThreeSharp className='inline mr-2' size={22}/><p>Orders</p></button>
        <button  className=" flex items-center justify-center text-[#ababab] bg-[#363636] w-[200px] rounded-[20px]">
            <MdTableRestaurant className='inline mr-2' size={22} /><p>Tables</p></button>
        <button  className="flex items-center justify-center text-[#ababab] bg-[#363636] w-[200px] rounded-[20px]"> 
            <MdMoreVert className='inline mr-2' size={22}/><p>More</p></button>
        <button className='bg-[#F6B100] rounded-full p-3 items-center absolute bottom-5'><BiSolidDish size={40}/>
        </button>
    </div>
  )
}

export default BottomNav