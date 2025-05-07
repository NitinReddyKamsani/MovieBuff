import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
const GptSearchBar = ()=>{

    const langSelectorKey = useSelector((store)=>store.config.lang)
    return(
        <div className="pt-[10%] flex justify-center">
            <form className=" w-1/2 bg-black grid grid-cols-12 rounded-lg">
            <input type="text" placeholder={lang[langSelectorKey].placeholderText} className="py-2 px-4 m-4 rounded-lg col-span-9"/>
            <button className="bg-red-800 text-white py-2 px-4 rounded-lg col-span-3 m-4">{lang[langSelectorKey].search}</button>

            </form>
        </div>
    )
}

export default GptSearchBar;