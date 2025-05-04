import React from "react";
const VideoTitle = ({title,overview})=>{
    return(
        <div className="pt-48 px-12">
           <h1 className="text-5xl font-bold">{title}</h1>
           <p className="w-1/4 py-3">{overview}</p>
           <div className="justify-evenly">
           <button className="py-2 font-bold px-12 bg-gray-500 text-white rounded-lg text-xl opacity-50"> ▶️ Play</button>
           <button className=" mx-2 py-2 font-bold px-9 bg-gray-500 text-white rounded-lg text-xl opacity-50">More Info</button>
           </div>
           
        </div>
    )
}

export default VideoTitle;