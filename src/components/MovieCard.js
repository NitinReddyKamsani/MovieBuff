import React from "react";
import { movieImg } from "../utils/constants";
const MovieCard = ({poster})=>{
    return(
        <div className="min-w-[190px] mr-4">
            <img src={movieImg + poster} alt="movie poster" className="w-full object-cover rounded"/>
        </div>
    )
}

export default MovieCard;