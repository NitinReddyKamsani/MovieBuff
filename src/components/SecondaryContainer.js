import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () =>{
    const movies = useSelector(store => store.movies);
    return(
        <div className="bg-black">
            <div className="-mt-44 pl-12 relative z-10">
            <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
            <MovieList title={"New Releases"} movies={movies.nowPlaying} />
            <MovieList title={"Trending"} movies={movies.nowPlaying} />
            <MovieList title={"Upcoming movies"} movies={movies.nowPlaying} />
            <MovieList title={"Specials"} movies={movies.nowPlaying} />
            </div>
        </div>
    )
}

export default SecondaryContainer;