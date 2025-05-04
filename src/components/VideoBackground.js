import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
const VideoBackground = ({movieId})=>{

    async function getMovieTrailer(){
            
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,API_OPTIONS);
        const json = await data.json();
        //console.log(json);

        const filterData = json.results.filter((video)=>video.type === "Trailer");
        console.log(filterData);
        const trailer = filterData.length ? filterData[0] : json.results[0];

    }

    useEffect(()=>{
        getMovieTrailer();
    },[])

    return(
        <div>
            VideoBackground
        </div>
    )
}

export default VideoBackground;