import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Search from './components/Search';

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
      <Search/>

    </div>
  )
}

export default App
