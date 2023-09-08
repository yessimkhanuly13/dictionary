import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [fontFamily, setFontFamily] = useState('font-serif');
  
  // font-mono, font-sans

  function toggleDarkmode(){
    setDarkMode(!darkMode);
    if(darkMode){
      document.body.style.backgroundColor = "#ffffff"
    }else{
      document.body.style.backgroundColor = "#121212"
    }
  } 
  
  return (
    <div className={darkMode ? `dark-theme w-full ${fontFamily}` : `light-theme w-full ${fontFamily}`}>  
      <Navbar toggleDarkmode={toggleDarkmode} setFontFamily={setFontFamily}/>
      <Search/>

    </div>
  )
}

export default App
