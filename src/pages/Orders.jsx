import React, {useState} from "react"
import BottomNav from "../components/shared/BottomNav"
import OrderCart from "../components/order/OrderCart"
import BackButton from "../components/shared/BackButton"
const Orders =() =>{
    const [status, setStatus] = useState("all");


    return(
        <section className="bg-[#1f1f1f] h-[calc(100vh-7rem)] overflow-hidden ">
            <div className="flex items-center justify-between px-8 py-4 mt-2">
                <div className="flex gap-4 items-center">
                    <BackButton/>
                    <h1 className="text-[#cdcdcd] text-2xl tracking-wider font-bold">Orders</h1>
                </div>
                <div className="flex items-center justify-around gap-4">
                    <button onClick={() => setStatus("all")} className={`text-[#ababab] ${status === "all" && "bg-[#383838] rounded-lg px-3 py-2"} text-lg rounded-lg px-3 py-2 font-semibold`}>All</button>
                    <button onClick={() => setStatus("progress")} className={`text-[#ababab] ${status === "progress" && "bg-[#383838] rounded-lg px-3 py-2"} text-lg rounded-lg px-3 py-2 font-semibold`}>In process</button>
                    <button onClick={() => setStatus("ready")} className={`text-[#ababab] ${status === "ready" && "bg-[#383838] rounded-lg px-3 py-2"} text-lg rounded-lg px-3 py-2 font-semibold`}>Ready</button>
                    <button onClick={() => setStatus("completed")} className={`text-[#ababab] ${status === "completed" && "bg-[#383838] rounded-lg px-3 py-2"} text-lg rounded-lg px-3 py-2 font-semibold`}>Completed</button>
                </div>
            </div>
            <div className="flex flex-wrap gap-6 px-14 py-4  overflow-y-scroll no-scrollbar h-[calc(120vh-5rem-5rem)]">
                <OrderCart/>
                <OrderCart/>
                <OrderCart/>
                <OrderCart/>
                <OrderCart/>
                <OrderCart/>
                <OrderCart/>
                <OrderCart/>
                <OrderCart/>
                <OrderCart/>
                <OrderCart/>
                <OrderCart/>
                <OrderCart/>
                <OrderCart/>

            </div>
            <BottomNav/> 
        </section>
    )
}
export default Orders