import React from 'react'
import lang from "../utils/languageConstant"
import { useSelector } from 'react-redux'
const GptSearchBar = () => {

  const langKey = useSelector((store)=>store.configapp.lang)
  return (
    <div className='pt-[5%] text-center '>
        <form className=' bg-black flex justify-center items-center  '>
            <input className='w-[60%] p-4 m-4 border border-gray-500' placeholder={lang[langKey].gptSearchPlaceHolder} />
            <button className='p-4 bg-red-700 text-white  '>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar