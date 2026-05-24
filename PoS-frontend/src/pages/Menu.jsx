import React from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import { MdRestaurantMenu  } from "react-icons/md";
import MenuContainer from "../components/menu/MenuContainer";
import CustomerInfo from "../components/menu/CustomerInfo";
import CartInfo from "../components/menu/CartInfo";
import Bill from "../components/menu/Bill";
import { useSelector } from "react-redux";
const Menu = () =>{

    const customerData = useSelector(state => state.customer);
    
    return(
        <section className="bg-[#1f1f1f] h-full pb-14 overflow-hidden flex flex-col">
             {/*Left Div*/}
                <div className="flex items-center justify-between px-8 py-4 mt-2 shrink-0">
                <div className="flex gap-4 items-center">
                    <BackButton/>
                    <h1 className="text-[#f5f5f5] text-2xl tracking-wider font-bold">Menu</h1>
                </div>
                <div className="flex items-center justify-around gap-4">
                <div className='flex items-center gap-3 cursor-pointer '>
                    <MdRestaurantMenu className='text-[#f5f5f5] text-4xl' />
                    <div className="flex flex-col items-start">
                        <h1 className="text-md text-[#f5f5f5] font-semibold">{customerData.customerName || "customer Name"}</h1>
                        <p className="text-xs text-[#ababab] font-medium">
                           Table: {customerData.table?.tableNo || "N/A"}</p>
                    </div></div>
                </div>
            </div>
            <div className="overflow-y-auto  min-h-0 scrollbar-hide flex gap-3 px-3 ">
                {/*Left*/}
                <div className="flex-[3]">
        <MenuContainer />
        </div>
         {/* Right Div */}
      <div className="flex-[1] bg-[#1a1a1a] mr-3 rounded-lg self-start">
        {/* Customer Info */}
        <CustomerInfo />
        <hr className="border-[#2a2a2a] border-t-2" />
        {/* Cart Items */}
        <CartInfo />
        <hr className="border-[#2a2a2a] border-t-2" />
        {/* Bills */}
        <Bill />
      </div>
      </div>
      <BottomNav />
    </section>
  );
};

export default Menu;