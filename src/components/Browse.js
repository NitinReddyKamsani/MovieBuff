import React from "react";
import Header from "./Header";
import useNowPlaying from "../../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRated from "../../hooks/useTopRated";
import useUpcommingMovies from "../../hooks/useUpcommingMovies";


const Browse = () => {

    useNowPlaying();
    usePopularMovies();
    useTopRated();
    useUpcommingMovies();

    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse;