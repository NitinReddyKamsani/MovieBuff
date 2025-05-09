import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { Background } from "../utils/constants";
const GptSearch = ()=>{
    return(
        <div>
            <div className="fixed -z-10 opacity-85">
                <img className="bg-opacity-30 m-0" src={Background}
                alt ="background"/>
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearch;