import React from "react"
import BottomNav from "../components/shared/BottomNav"
import Greetings from  "../components/home/Greetings"
import MiniCard from "../components/home/MiniCard"
import { BsCashCoin } from "react-icons/bs"
import { GrInProgress } from "react-icons/gr"
import RecentOrders from "../components/home/RecentOrders"
import PopularDishes from "../components/home/PopularDishes"
import { useState, useEffect } from "react";
import axios from "axios";
import { getOrders } from "../https/index";
const Home =() =>{
    const [orders, setOrders] = useState([]);
    useEffect(() => {

  const fetchOrders = async () => {
            try {
            const res = await getOrders();
            console.log(res.data);
            setOrders(res.data.data);
            } catch (error) {
            console.log(error);
            }
        };
        fetchOrders();
        }, []);
    console.log(orders);

    const totalEarnings = orders
    .filter(order => order.orderStatus === "Paid")
    .reduce((acc, order) => acc + order.bills.totalWithTax, 0);

    const inProgressOrders = orders.filter(
        order => order.orderStatus === "In Progress"
        ).length;


    return(
        <section className="bg-[#1f1f1f] h-[calc(100vh-7rem)] overflow-hidden flex gap-3">
        {/*Left-Div*/}
        <div className="flex-[3]">
            <Greetings/>
            <div className="flex items-center w-full gap-3 px-8 mt-8">
                <MiniCard title="Total Earnings" icon={<BsCashCoin/>} number={totalEarnings} footerNum={1.6}/>
                <MiniCard title="In Progress" icon={<GrInProgress/>} number={inProgressOrders} footerNum={3.6}/>
            </div>
            <RecentOrders/>
        </div>
        {/*Right-Div*/}
        <div className="flex-[2]">
            <PopularDishes/>
        </div>
        <BottomNav/>
        </section>

    )
}
export default Home