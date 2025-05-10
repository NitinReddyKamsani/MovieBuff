import React from "react";
const VideoTitle = ({title,overview})=>{
    return(
        <div className="pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black aspect-video w-screen">
           <h1 className=" text-2xl md:text-5xl font-bold">{title}</h1>
           <p className="hidden md:inline-block   w-1/4 py-3">{overview}</p>
           <div className="my-3  md:m-0 justify-evenly">
           <button className="py-1 md:py-2 px-2 md:px-12 bg-white text-black rounded-lg text-xl hover:bg-opacity-80"> ▶ Play</button>
           <button className="hidden md:inline-block mx-2 py-2 px-9 bg-gray-600 text-white rounded-lg text-xl bg-opacity-90">More Info</button>
           </div>
           
        </div>
    )
}

export default VideoTitle;