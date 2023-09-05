import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkmode(){
    setDarkMode(!darkMode);
    console.log(darkMode)
  }
  
  useEffect(()=>{
    console.log(import.meta.env.VITE_API);
  },[])

  return (
    <>  
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" onClick={toggleDarkmode}/>
        <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
    </label>
      {darkMode && (
        <div className='border-solid border-2'>
          1234
        </div>
      )}
     
     
    </>
  )
}

export default App
