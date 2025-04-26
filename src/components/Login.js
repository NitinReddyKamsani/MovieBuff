import React, { useState } from "react"
import Header from "./Header";

const Login = () =>{

    const [isSignIn,setisSignIn] = useState(true);

    function handleSignIn(){
        setisSignIn(!isSignIn);
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img className="bg-opacity-30 m-0" src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_large.jpg"
                alt ="background"/>
            </div>
            <form className= "bg-black absolute w-3/12 my-56 mx-auto left-0 right-0 p-12 text-white bg-opacity-80">
                <h2 className="text-white p-2 font-bold text-3xl my-4">{isSignIn ? "Sign In" : "Sign Up"}</h2>
                {
                    !isSignIn && <input type="text" placeholder="Enter your Full Name" className="p-2 my-4 text-black w-full bg-gray-700"/>
                }
                <input type="text" placeholder="Enter your Email" className="p-2 my-4 text-black w-full bg-gray-700"/>
                <input type="password" placeholder="Enter your password" className="p-2 my-4 text-black w-full bg-gray-700" />
                <button className=" py-2 px-6 my-4 bg-red-700 w-full rounded-md">{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={handleSignIn}>{isSignIn ? "New To Netflix ? Sign Up" : "Already Registered ? Sign-In"}</p>
            </form>
           
        </div>
    )
}

export default Login;