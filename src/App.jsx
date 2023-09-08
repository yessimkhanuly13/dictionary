import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkmode(){
    setDarkMode(!darkMode);
    if(darkMode){
      document.body.style.backgroundColor = "#ffffff"
    }else{
      document.body.style.backgroundColor = "#121212"
    }
  } 
  
  useEffect(()=>{
    console.log(import.meta.env.VITE_API);
  },[])

  return (
    <div className={darkMode ? 'dark-theme w-full' : 'light-theme w-full'}>  
      <Navbar toggleDarkmode={toggleDarkmode}/>
      <Search/>

    </div>
  )
}

export default App
