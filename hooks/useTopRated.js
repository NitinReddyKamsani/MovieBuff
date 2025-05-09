import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../src/utils/constants";
import { addTopRatedMovies } from "../src/utils/moviesSlice";
import { useEffect } from "react";

const useTopRated = () => {

    const dispatch = useDispatch();

    const topRatedMovies = useSelector((store)=>store.movies.topRatedMovies);

    async function getTopRatedMovies(){

        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results))
    }

    useEffect(()=>{
        if(!topRatedMovies){
            getTopRatedMovies();
        }
    },[])

}

export default useTopRated;