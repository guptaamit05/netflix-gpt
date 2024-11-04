import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestion from "./GptSuggestion"

const GptSearch = () => {
  return (
    <div className="w-screen h-full absolute z-30 text-center text-3xl font-bold top-16 bg-white">
      <GptSearchBar />
      <GptSuggestion/>
    </div>
  );
};

export default GptSearch;
