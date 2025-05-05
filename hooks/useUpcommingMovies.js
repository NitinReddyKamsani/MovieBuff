import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../src/utils/constants";
import { addUpCommingMovies } from "../src/utils/moviesSlice";
import { useEffect } from "react";

const useUpcommingMovies = () => {

    const dispatch = useDispatch();

    async function getUpcommingMovies(){

        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTIONS);
        const json = await data.json();
        dispatch(addUpCommingMovies(json.results))
    }

    useEffect(()=>{
        getUpcommingMovies();
    },[])

}

export default useUpcommingMovies;