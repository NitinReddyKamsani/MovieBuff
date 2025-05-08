import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGptSearch : false,
        moviesNames : null,
        movieResults : null
    },
    reducers : {
        toggleShowGptSearch : (state) =>{
            state.showGptSearch = !state.showGptSearch
        },
        addShowMovies : (state,action) =>{

            const {moviesNames,movieResults} = action.payload
            state.moviesNames = moviesNames ;
            state.movieResults = movieResults

        }
    }
})

export const {toggleShowGptSearch,addShowMovies} = gptSlice.actions;


export default gptSlice.reducer;