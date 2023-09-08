import React, { useEffect, useRef, useState } from 'react'
import search from '../assets/icon-search.svg'
import WordInfo from './WordInfo';
import Loading from './Loading';
import Error from './Error';

function Search() {
    const [word, setWord] = useState("dictionary");
    const [result, setResult] = useState({});
    const [err, setErr] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const inpRef = useRef(null);
    const btnRef = useRef(null);

    const handleKeyPress = (e) =>{
        if(e.key === "Enter"){
            btnRef.current.click();
        }
    }
    

    const searchForWord = async (word) =>{
          setIsLoading(true);
          setErr(false);
        try {
            const response = await fetch(import.meta.env.VITE_API + word);
            if (!response.ok) {
              setErr(true);
              setIsLoading(false);
            }
            const data = await response.json();
            data && setResult(data[0]);
            inpRef.current.value = null;
            data && setIsLoading(false);
            data && console.log(data[0]);
          } catch (error) {
            console.error('Error fetching data:', error);
        }        
    }

    useEffect(()=>{
      searchForWord(word);
    },[])

  return (
    <div className='w-full mt-12'>
        <div className="relative">
                <input ref={inpRef} className="font-bold block w-full p-4 pl-10 text-xl text-gray-900 border border-gray-300 rounded-xl bg-gray-50" placeholder="Search for any word..." required onChange={(e)=>setWord(e.target.value)} onKeyPress={handleKeyPress}/>
                <button ref={btnRef} type="submit" className="text-white absolute right-2.5 bottom-2.5" onClick={()=>searchForWord(word)}>
                   <img src={search} alt="search icon" /> 
                </button>
        </div>

        {
            result && (
                <WordInfo result={result} setResult={searchForWord}/>
            )
        }
        
        {
          isLoading && (
            <Loading/>
          )
        }
        {
          err && (
            <Error/>
          )
        }
    </div>
  )
}

export default Search