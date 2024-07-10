import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen aspect-video px-5 pt-32 md:pt-52 md:px-10 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold md:font-extrabold md:text-2xl my-4">{title}</h1>
      <p className="invisible md:visible w-1/4 text-sm ">{description}</p>
      <div className="invisible md:visible">
        <button className="bg-white px-6 mr-2 mt-2 p-2 rounded text-black hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-500 px-6 mr-2 mt-2 p-2 rounded bg-opacity-50 text-white">
          More Info...
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
