import React from 'react'
import logo from '../assets/logo.svg'
import moon from '../assets/icon-moon.svg'

function Navbar(toggleDarkmode) {
  return (
    <div className='flex w-full justify-around'>
        <div className='flex'>
            <img src={logo} alt="book"/>

            <select className='ml-4' onChange={(e)=>console.log(e.target.value)}>
                <option value="serif">Serif</option>
                <option value="serif1">serif1</option>
                <option value="serif2">serif2</option>
            </select>

        </div>
        <div>
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" onClick={toggleDarkmode}/>
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                {/* <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Mode</span> */}
                <img className='ml-2' src={moon} alt="" />
            </label>
        </div>
    </div>
  )
}

export default Navbar