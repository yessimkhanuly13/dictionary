import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';

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
    <div className='w-full'>  
      <Navbar toggleDarkmode={toggleDarkmode}/>
     
     
    </div>
  )
}

export default App
