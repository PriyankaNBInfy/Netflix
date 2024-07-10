import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[20%] md:pt-[8%] flex justify-center">
      <form className="p-2 m-1 w-full md:w-1/2 bg-black grid grid-cols-12 rounded">
        <input
          className="p-4 m-2 text-sm md:text-lg rounded w-auto col-span-9"
          type="text"
          placeholder={lang[language].gptSearchPlaceHolder}
        />
        <button className="col-span-3 py-2 md:px-4 m-2 text-sm text-lg rounded bg-red-700 text-white">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
