import React from "react";

const Bill = () =>{
    return(
    
        <div className="px-5 pb-4">
            
        <div className="flex items-center justify-between mt-2">
            <p className="text-xs text-[#ababab] font-medium ">Items(4)</p>
            <h1 className="text-[#f5f5f5] font-bold">₹240</h1>
        </div>
        <div className="flex items-center justify-between mt-2">
            <p className="text-xs text-[#ababab] font-medium ">Tax(5.25%)</p>
            <h1 className="text-[#f5f5f5] font-bold">₹24</h1>
        </div>
        <div className="flex items-center gap-3 mt-4">
            <button className="bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold">Cash</button>
            <button className="bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold">Online</button>
         </div>

         <div className="flex items-center gap-3  mt-4">
            <button className="bg-[#025cca] px-4 py-3 w-full rounded-lg text-[#f5f5f5] font-semibold">Print Receipt</button>
            <button className="bg-[#f6b100] px-4 py-3 w-full rounded-lg text-[#1f1f1f] font-semibold">Place Order</button>
         </div>
         </div>
        

    )
}

export default Bill