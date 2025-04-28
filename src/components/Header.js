import React from "react"
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {

    const navigate = useNavigate();

    const user = useSelector(store =>store.user)

    function handleSignOut (){

        signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/")
        }).catch((error) => {
        // An error happened.
        navigate("/error");
    });

    }

    return (
        <div className="px-8 py-2 absolute bg-gradient-to-b from-black z-10 w-screen flex justify-between">
        <img className="w-36" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo" />

        {
        user && 
         <div className="flex">
            <h1 className="font-bold text-white text-xl m-1 py-2 px-1 animate-pulse duration-100">Welcome</h1>
            <h1 className="font-bold text-rose-800 text-xl m-1 py-2 px-0">{user.displayName}</h1>
            <img className="w-[50px] h-[50px]" src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" />
            <button onClick={handleSignOut} className= " text-white font-bold px-2">Sign out</button>
        </div>
        }       
        </div>
    );

};

export default Header;