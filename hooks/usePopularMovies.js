import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../src/utils/constants";
import { addPopularMovies } from "../src/utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {

    const dispatch = useDispatch();
    const popularMovies = useSelector((store)=>store.movies.popularMovies);

    async function getPopularMovies(){

        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results))
    }

    useEffect(()=>{
        if(!popularMovies){
            getPopularMovies();
        }
    },[])

}

export default usePopularMovies;