import React, { useState } from 'react'
import search from '../assets/icon-search.svg'

function Search() {
    const [word, setWord] = useState("");
    const [result, setResult] = useState(null);

    async function searchForWord(word){

        try {
            const response = await fetch(import.meta.env.VITE_API + word);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setResult(result);
            console.log(result);
          } catch (error) {
            console.error('Error fetching data:', error);
        }        
    }

  return (
    <div className='w-full mt-12'>
        <div className="relative">
                <input className="block w-full p-4 pl-10 text-xl text-gray-900 border border-gray-300 rounded-xl bg-gray-50" placeholder="Search for any word..." required onChange={(e)=>setWord(e.target.value)}/>
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5" onClick={()=>searchForWord(word)}>
                   <img src={search} alt="search icon" /> 
                </button>
        </div>

        {
            result && (
                <div>
                   
                </div>
            )
        }
    </div>
  )
}

export default Search