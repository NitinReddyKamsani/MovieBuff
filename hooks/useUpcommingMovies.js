import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../src/utils/constants";
import { addUpCommingMovies } from "../src/utils/moviesSlice";
import { useEffect } from "react";

const useUpcommingMovies = () => {

    const dispatch = useDispatch();

    const upCommingMovies = useSelector((store)=>store.movies.upCommingMovies);

    async function getUpcommingMovies(){

        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTIONS);
        const json = await data.json();
        dispatch(addUpCommingMovies(json.results))
    }

    useEffect(()=>{
        if(!upCommingMovies){
            getUpcommingMovies();
        }
    },[])

}

export default useUpcommingMovies;