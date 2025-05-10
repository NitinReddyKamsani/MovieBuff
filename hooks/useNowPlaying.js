import { useDispatch, useSelector } from "react-redux";
import { url,API_OPTIONS } from "../src/utils/constants";
import { addNowPlaying } from "../src/utils/moviesSlice";
import { useEffect } from "react";

const useNowPlaying = () => {

    const dispatch = useDispatch();

    const nowPlaying = useSelector((store)=>store.movies.nowPlaying)

    async function getNowPlaying(){

        const data = await fetch(url,API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlaying(json.results))
    }

    useEffect(()=>{
        if(!nowPlaying){
                getNowPlaying();
        }
    },[])

}

export default useNowPlaying;