import React from "react";
import Header from "./Header";
import useNowPlaying from "../../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRated from "../../hooks/useTopRated";
import useUpcommingMovies from "../../hooks/useUpcommingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";


const Browse = () => {

    const showGptSearch = useSelector(store=>store.gpt.showGptSearch);

    useNowPlaying();
    usePopularMovies();
    useTopRated();
    useUpcommingMovies();

    return (
        <div>
            <Header />

            {
                showGptSearch ? <GptSearch /> : 
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            }
            
            
        </div>
    )
}

export default Browse;