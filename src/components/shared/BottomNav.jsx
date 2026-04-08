import React from "react";
import { IoReorderThreeSharp } from "react-icons/io5";
import { MdMoreVert } from "react-icons/md";
import { MdTableRestaurant } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
const BottomNav = () => {
    return(
        <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around">
            <button className="inline mr-4"><IoIosHome size={15} />Home</button>
            <button  className="inline mr-4"><IoReorderThreeSharp size={15}/>Orders</button>
            <button  className="inline mr-4"><MdTableRestaurant size={15} />Tables</button>
            <button  className="inline mr-4"> <MdMoreVert size={15}/>Others</button>
        </div>
    )
}
export default BottomNav    