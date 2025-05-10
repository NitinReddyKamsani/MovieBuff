import React, { useRef, useState } from "react"
import Header from "./Header";
import { validateData } from "../utils/validateData";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Background } from "../utils/constants";

const Login = () =>{

    const [isSignIn,setisSignIn] = useState(true);
    const [ErrorMsg,setErrorMsg] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);



    function handleSubmit() {

        const check = validateData(email.current.value , password.current.value);
        setErrorMsg(check);

        if(!isSignIn) {
            //sign up
            createUserWithEmailAndPassword(auth,email.current.value , password.current.value)
            .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
             // Signed up 
             updateProfile(user, {

                displayName: name.current.value,  
                
              }).then(() => {
                // Profile updated!
                // ...
             
                const {uid,email,displayName} = user;
                dispatch(addUser({uid : uid , email : email , displayName : displayName}))
                navigate("/browse");

              }).catch((error) => {
                // An error occurred
                // ...
                setErrorMsg(error.message)
              });
           
            
        })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(errorCode + " " + errorMessage)
        });
        }
        else{
            // sign in
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorCode + " " + errorMessage)
         });
        }
    }

    function handleSignIn(){
        setisSignIn(!isSignIn);
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img className="bg-opacity-30 m-0 h-screen object-cover" src={Background}
                alt ="background"/>
            </div>
            <form onSubmit={(e)=>{
                e.preventDefault()
            }} className= "bg-black absolute w-full md:w-3/12 my-56 mx-auto left-0 right-0 p-12 text-white bg-opacity-80">
                <h2 className="text-white p-2 font-bold text-3xl my-4">{isSignIn ? "Sign In" : "Sign Up"}</h2>
                {
                    !isSignIn && <input ref={name} type="text" placeholder="Enter your Full Name" className="p-2 my-4 text-black w-full bg-gray-700"/>
                }
                <input ref={email} type="text" placeholder="Enter your Email" className="p-2 my-4 text-black w-full bg-gray-700"/>
                <input ref = {password} type="password" placeholder="Enter your password" className="p-2 my-4 text-black w-full bg-gray-700" />
                <p className="text-red-700 font-bold text-lg p-2">{ErrorMsg}</p>
                <button className=" py-2 px-6 my-4 bg-red-700 w-full rounded-md" onClick={handleSubmit}>{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={handleSignIn}>{isSignIn ? "New To Netflix ? Sign Up" : "Already Registered ? Sign-In"}</p>
            </form>
           
        </div>
    )
}

export default Login;