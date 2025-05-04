import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../src/utils/constants";
import { addTrailerVideo } from "../src/utils/moviesSlice";


const useMovieTrailer = (movieId) =>{

    const dispatch = useDispatch();

    async function getMovieTrailer(){    
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter((video)=>video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
       
    }

    useEffect(()=>{
        getMovieTrailer();
    },[])
}

export default useMovieTrailer;