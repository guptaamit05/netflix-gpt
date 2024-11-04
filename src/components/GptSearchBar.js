import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";
// import clientopenai from "../utils/openAI";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.configapp.lang);
  const searchText = useRef(null);

  const callOpenAIAPI = async () => {
    // call the openAI GPT api to get movie result based on text box text   ..
    // const apiResult = await clientopenai.chat.completions.create({
    //   messages: [{ role: "user", content: searchText.current.value }],
    //   model: "gpt-3.5-turbo",
    // });

  };

  return (
    <div className="pt-[2%] text-center ">
      <form
        onClick={(e) => e.preventDefault()}
        className=" bg-black flex justify-center items-center  "
      >
        <input
          ref={searchText}
          className="w-[60%] p-4 m-4 border border-gray-500"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button onClick={callOpenAIAPI} className="p-4 bg-red-700 text-white  ">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
