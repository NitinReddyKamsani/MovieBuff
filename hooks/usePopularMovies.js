import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../src/utils/constants";
import { addPopularMovies } from "../src/utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {

    const dispatch = useDispatch();

    async function getPopularMovies(){

        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results))
    }

    useEffect(()=>{
        getPopularMovies();
    },[])

}

export default usePopularMovies;