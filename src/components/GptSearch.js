import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { Background } from "../utils/constants";
const GptSearch = ()=>{
    return(
        <>
        <div className="fixed -z-10">
                 <img className="bg-opacity-30 m-0 h-screen object-cover" src={Background}
                alt ="background"/>
        </div>
        <div className="">
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
        </>
    )
}

export default GptSearch;