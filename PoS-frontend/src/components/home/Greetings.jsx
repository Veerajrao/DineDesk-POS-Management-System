import React, { useState,useEffect} from 'react'
import { useSelector } from 'react-redux';

const Greetings = () => {
  const userData = useSelector(state => state.user);
  const [dateTime, setDateTime]=useState(new Date());


  useEffect(() => {
    const timer = setInterval(() => setDateTime (new Date()), 1000);
    return () => clearInterval(timer);
  }, []);


  const hour = new Date().getHours();

  let greeting = "";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  const formatDate = (date) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

    return `${months [date.getMonth()]} ${String(date.getDate()).padStart (2, '0')}, ${date.getFullYear()}`;
    
  };


  const formatTime = (date) =>
    `${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes()
    ).padStart(2, "0")}:${String(date.getSeconds()).padStart (2, "0")}`;


  return (
    <div className='flex justify-between items-center px-8 mt-5'>
      <div>
        <h1 className='text-[#f5f5f5] text-2xl mb-2 font-semibold tracking-wide'>{greeting} {userData.name || "Test"}</h1>
        <p className='text-[#ababab] text-sm'>Give Best Services for Customer😊</p>
      </div>
      <div>
        <h1 className='text-[#f5f5f5] text-3xl font-bold tracking-wide w-[130px]'>{formatTime(dateTime)}</h1>
        <p className='text-[#ababab] text-sm'>{formatDate(dateTime)}</p>
      </div>
    </div>
  )
}

export default Greetings