import React from "react";
import { movieImg } from "../utils/constants";
const MovieCard = ({poster})=>{
    if(!poster) return null;
    return(
        <div className=" w-36 md:min-w-[190px] mr-4">
            <img src={movieImg + poster} alt="movie poster" className="w-full object-cover rounded md:h-[300px] h-[200px]"/>
        </div>
    )
}

export default MovieCard;