import React, { useEffect } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo } from "../utils/constants";
import { userLogo } from "../utils/constants";



const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const user = useSelector((store) =>store.user)

    function handleSignOut (){

        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        navigate("/error");
    });

    }


    useEffect(()=>{

      const unsubscribe =   onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName} = user;
              dispatch(addUser({uid : uid , email : email , displayName : displayName}))
              // ...
              navigate("/browse");
            } else {
              // User is signed out
              dispatch(removeUser())
              // ...
              navigate("/");
            }
          });

          return() => unsubscribe();

    },[])

    return (
        <div className="px-8 py-2 absolute bg-gradient-to-b from-black z-10 w-screen flex justify-between">
        <img className="w-36" src={Logo}
        alt="logo" />

        {
        user && 
         <div className="flex">
            <h1 className="font-bold text-white text-xl m-1 py-2 px-1 animate-pulse duration-100">Welcome</h1>
            <h1 className="font-bold text-rose-800 text-xl m-1 py-2 px-0">{user.displayName}</h1>
            <img className="w-[50px] h-[50px]" src={userLogo} />
            <button onClick={handleSignOut} className= " text-white font-bold px-2">Sign out</button>
        </div>
        }       
        </div>
    );

};

export default Header;