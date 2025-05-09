import React, { useEffect, useRef } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo, Supported_Languages } from "../utils/constants";
import { userLogo } from "../utils/constants";
import { toggleShowGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";





const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const user = useSelector((store) =>store.user)


    const gptSearch = useSelector((store)=>store.gpt.showGptSearch);

    const lang = useRef(null);


    function handleSignOut (){

        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        navigate("/error");
    });

    }

    const handleGptSearch=()=>{
      dispatch(toggleShowGptSearch());
    }

    const handleLanguage=()=>{
      const selected = lang.current.value;
      dispatch(changeLanguage(selected));
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
         <div className="flex justify-between">
        { 
            gptSearch &&
          
            <select className="px-2 h-12 bg-gray-800 text-white m-2 w-24" onChange={handleLanguage} ref={lang}>
             {
              Supported_Languages?.map((lang)=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
             }
            </select>
          
          }
            <img className="w-[50px] h-[50px] m-2" src={userLogo} />
            <button onClick={handleGptSearch} className="bg-purple-800 text-white px-4 py-2 m-4 rounded-lg" >{gptSearch ? "Home Page" : "AI Search"}</button>
            <button onClick={handleSignOut} className= " text-white font-bold px-2">Sign out</button>
        </div>
        }      
        </div>


    );

};

export default Header;