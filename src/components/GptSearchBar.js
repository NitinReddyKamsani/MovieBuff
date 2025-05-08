import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { genAI } from "../utils/geminiAi";
import { API_OPTIONS } from "../utils/constants";
import { addShowMovies } from "../utils/gptSlice";


const GptSearchBar = ()=>{

    //multilingual support
    const langSelectorKey = useSelector((store)=>store.config.lang)
    const searchText = useRef(null);

    const dispatch = useDispatch();

    //searching movienames in tmdb through search API

    const searchTmdb = async(movieName)=>{
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" +movieName+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
        const json = await data.json();

        return json.results;
    }

    //integrating the gemini-AI model to give to act as movie recomendation system and dispatch it to the slice

    const handleGpt = async()=>{
         const Searchtext = searchText.current.value;

            const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro-exp-03-25" });
          
            const prompt = `Suggest 5 popular movies based on the keyword: "${Searchtext}". 
            Return the result as a JSON array of objects. 
            Each object should include: "title". 
            Only return valid JSON data without any explanation or extra text.`;
            
            const result = await model.generateContent(prompt);
            const response = await result.response;
            let text = await response.text();
    
            if (text.startsWith("```")) {
                text = text.replace(/```(?:json)?\s*/g, "").replace(/```$/, "");
            }

            let titles = []
            try {
                // Step 2: Parse and extract titles
                const movies = JSON.parse(text);
                titles = movies.map(movie => movie.title);
              } catch (error) {
                console.error("Failed to parse JSON:", error);
            }

            //contains all the movie titles
            console.log("Movie Titles : " , titles);

            //calling the searchTmdb() to search in tmdb website about the movie
            const promiseArray = titles.map((movieName)=> searchTmdb(movieName));

            const tmdbResults = await Promise.all(promiseArray);
            console.log(tmdbResults);

            dispatch(addShowMovies({moviesNames : titles , movieResults : tmdbResults}));
        
    }
  
  // Call this function to see the available models
  // listAvailableModels();
          
    
    return(
        <div className="pt-[10%] flex justify-center">
            <form className=" w-1/2 bg-black grid grid-cols-12 rounded-lg" onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type="text" placeholder={lang[langSelectorKey].placeholderText} className="py-2 px-4 m-4 rounded-lg col-span-9"/>
            <button className="bg-red-800 text-white py-2 px-4 rounded-lg col-span-3 m-4" onClick={handleGpt}>{lang[langSelectorKey].search}</button>

            </form>
        </div>
    )
}

export default GptSearchBar;