import { createSlice } from "@reduxjs/toolkit";



const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlaying : null,
        trailerVideo : null,
        popularMovies : null,
        topRatedMovies : null,
        upCommingMovies : null,
    },
    reducers : {
        addNowPlaying : (state,action)=>{
            state.nowPlaying = action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload;
        },
        addPopularMovies : (state,action)=>{
            state.popularMovies = action.payload
        },
        addTopRatedMovies : (state,action) =>{
            state.topRatedMovies = action.payload;
        },
        addUpCommingMovies : (state,action) =>{
            state.upCommingMovies = action.payload;
        }
    }
});

export const { addNowPlaying,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpCommingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;