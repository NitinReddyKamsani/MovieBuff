import React from "react"
import Header from "./Header";

const Login = () =>{
    return (
        <div>
            <Header />
            <div className="absolute">
                <img className="bg-opacity-30 m-0" src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_large.jpg"
                alt ="background"/>
            </div>
            <form className="bg-black absolute w-3/12 my-56 mx-auto left-0 right-0 py-12">
                <input type="text" placeholder="Enter your Email" className="p-2 m-2" />
                <input type="password" placeholder="Enter your password" className="p-2 m-2" />
            </form>
        </div>
    )
}

export default Login;