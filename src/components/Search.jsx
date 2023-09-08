import React, { useRef, useState } from 'react'
import search from '../assets/icon-search.svg'
import WordInfo from './WordInfo';
import Loading from './Loading';

function Search() {
    const [word, setWord] = useState("");
    const [result, setResult] = useState(null);

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
        try {
            const response = await fetch(import.meta.env.VITE_API + word);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setResult(data[0]);
            inpRef.current.value = null;
            data && setIsLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error);
        }        
    }

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
                <WordInfo result={result}/>
            )
        }
        {
          isLoading && (
            <Loading/>
          )
        }
    </div>
  )
}

export default Search