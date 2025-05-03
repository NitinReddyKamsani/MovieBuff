import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS, url } from "../utils/constants";

const Browse = () =>{

    async function getNowPlaying(){

        const data = await fetch(url,API_OPTIONS);
        const json = await data.json();
        console.log(json);
    }

    useEffect(()=>{
        getNowPlaying();
    },[])

    return (
        <div>
            <Header />
        </div>
    )
}

export default Browse;