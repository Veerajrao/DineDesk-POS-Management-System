import React, { useState } from "react"
import restaurant from "../assets/images/restaruantimage.jpg";
import logo from "../assets/images/logo.png";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
const Auth =() =>{
    const [isRegister, setIsRegister] = useState(false);

    return(
        <div className="flex min-h-screen w-full">
            {/*left section*/}
            <div className="w-1/2 h-screen relative flex items-center justify-center bg-cover">
            {/*Bg Image */}
            <img className="w-full h-full object-cover" src={restaurant} alt="Restaruant Image"/>

            {/*black overlay*/}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <blockquote className="absolute bottom-10 px-8 mb-10 text-2xl italic text-white">
                "Serve Customers the best food with prompt and friendly services in a good atmosphere"<br/>
                <span className="block mt-4 text-yellow-400">- founder of DineDesk</span>

            </blockquote>
            </div>
            {/*Right section*/}
            <div className="w-1/2 overflow-y-scroll h-screen no-scrollbar bg-[#1a1a1a] p-10">
            <div className="flex flex-col items-center gap-2">
                <img src={logo} alt="DineAndDesk Logo" className="h-32 w-48 border-none"/>
                {/*<h1 className="text-sm font-semibold text-[#f5f5f5] tracking-wide">DineDesk</h1>*/}
            </div>
            <h2 className="text-4xl text-center mt-10 font-semibold text-yellow-400 mb-10">
                {isRegister ? "Employee Registration" : "Employee Login"}
            </h2>
            {/*componets*/}
            {isRegister ? <Register setIsRegister={setIsRegister}/> : <Login/>}
            <div className="flex justify-center mt-6">
                <p className="text-sm text-[#ababab]">
                    {isRegister ? "Already Have an account?" : "Don't have an account"}
                    <a onClick={() => setIsRegister(!isRegister)}className="text-yellow-400 font-semibold hover:underline" href="#">
                        {isRegister ? "Sign In" : "Sign Up"}
                    </a>
                </p>
            </div>

            </div>
        </div>
    )
}
export default Auth