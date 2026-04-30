import React from 'react'
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const BackButton = () => {
    const navigate = useNavigate();
  return (
    <button onClick={() =>navigate(-1)} className='bg-[#f6b100] text-[30px] rounded-full p-3 font-bold text-[#000000]'><IoArrowBackCircleSharp /></button>
  )
}

export default BackButton