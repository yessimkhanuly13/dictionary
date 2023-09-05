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
      <label>Dark Mode
        <input type='checkbox' onClick={toggleDarkmode}/>
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
