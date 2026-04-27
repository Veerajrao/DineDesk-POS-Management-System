import React from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import { MdRestaurantMenu  } from "react-icons/md";
import MenuContainer from "../components/menu/MenuContainer";
const Menu = () =>{
    return(
        <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
             {/*Left Div*/}
             <div className='flex-[3]'>
                <div className="flex items-center justify-between px-8 py-4 mt-2">
                <div className="flex gap-4 items-center">
                    <BackButton/>
                    <h1 className="text-[#f5f5f5] text-2xl tracking-wider font-bold">Menu</h1>
                </div>
                <div className="flex items-center justify-around gap-4">

                </div>
                <div className='flex items-center gap-3 cursor-pointer'>
                    <MdRestaurantMenu className='text-[#f5f5f5] text-4xl' />
                    <div className="flex flex-col items-start">
                        <h1 className="text-md text-[#f5f5f5] font-semibold">Customer Name</h1>
                        <p className="text-xs text-[#ababab] font-medium">Table No: 2</p>
                    </div>
                </div>
            </div>
        <MenuContainer />
        </div>
            {/*Right Div*/}
    <div className="flex-[1] bg-blue-500">
            
        </div>
       
            <BottomNav />
        </section>
    )
}

export default Menu