import React, { useState } from "react";
import { IoReorderThreeSharp } from "react-icons/io5";
import { MdMoreVert } from "react-icons/md";
import { MdTableRestaurant } from "react-icons/md";
import { BiSolidDish } from "react-icons/bi";
import { IoIosHome } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Model from "./Model";

const BottomNav =()=>{
    
    const navigate = useNavigate();
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [guestCount, setGuestCount] = useState(0);
    const openModel = () => setIsModelOpen(true);
    const closeModel = () => setIsModelOpen(false);

    const increment = () =>{
        if(guestCount >= 6) return;
        setGuestCount((prev) => prev +1 );
    }
    const decrement = () => {
        if(guestCount<=0) return;
        setGuestCount((prev) => prev - 1 );

    }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-12 flex justify-around">
        <button onClick={() => navigate("/")} className=" flex items-center justify-center text-[#ababab] bg-[#363636] w-[200px] rounded-[20px]">
            <IoIosHome className='inline mr-2' size={22} /><p>Home</p></button>
        <button onClick={() => navigate("/orders")} className="flex items-center justify-center text-[#ababab] bg-[#363636] w-[200px] rounded-[20px]">
            <IoReorderThreeSharp className='inline mr-2' size={22}/><p>Orders</p></button>
        <button onClick={() => navigate("/tables")} className=" flex items-center justify-center text-[#ababab] bg-[#363636] w-[200px] rounded-[20px]">
            <MdTableRestaurant className='inline mr-2' size={22} /><p>Tables</p></button>
        <button  className="flex items-center justify-center text-[#ababab] bg-[#363636] w-[200px] rounded-[20px]"> 
            <MdMoreVert className='inline mr-2' size={22}/><p>More</p></button>
        <button onClick={openModel} className='bg-[#F6B100] rounded-full p-3 items-center absolute bottom-5'><BiSolidDish size={40}/>
        </button>
        <Model isOpen={isModelOpen} onClose={closeModel} title="Create Order">
                <div>
                    <label className="block text-[#ababab] mb-2 mt-2text-sm font-medium">Customer Name</label>
                    <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg">
                        <input type="text" name="" placeholder="Enter customer name" id="" 
                        className="bg-transparent flex-1 text-white focus:outline-none"/>
                    </div>
                </div>
                <div>
                    <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">Customer Phone</label>
                    <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg">
                        <input type="tel" name="" placeholder="+91-99999999" id="" 
                        className="bg-transparent flex-1 text-white focus:outline-none"/>
                    </div>
                </div>
                <div>
                    <label className="block mb-2 mt-3 text-sm font-medium text-{#ababab]">Guest</label>
                    <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg">
                        <button onClick={decrement}  className="text-yellow-500 text-2xl">&minus;</button>
                        <span className="text-white">{guestCount} person</span>
                        <button onClick={increment} className="text-yellow-500 text-2xl">&#43;</button>
                    </div>
                </div>
                <button onClick={() => navigate("/tables")} className="w-full bg-[#F68100] text-[#f5f5f5] rounded-lg py-3 mt-8 hover:bg-yellow-700">Create Order</button>
            </Model>
    </div>
  )
}

export default BottomNav