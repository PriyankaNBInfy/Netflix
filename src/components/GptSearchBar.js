import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[8%] flex justify-center">
      <form className="p-2 m-6 w-1/2 bg-black grid grid-cols-12 rounded">
        <input
          className="p-4 m-2 rounded w-auto col-span-9"
          type="text"
          placeholder={lang[language].gptSearchPlaceHolder}
        />
        <button className="col-span-3 py-2 px-4 m-2 rounded bg-red-700 text-white">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
