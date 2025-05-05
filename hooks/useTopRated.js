import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../src/utils/constants";
import { addTopRatedMovies } from "../src/utils/moviesSlice";
import { useEffect } from "react";

const useTopRated = () => {

    const dispatch = useDispatch();

    async function getTopRatedMovies(){

        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results))
    }

    useEffect(()=>{
        getTopRatedMovies();
    },[])

}

export default useTopRated;