import React from 'react'
import logo from '../assets/logo.svg'
import moon from '../assets/icon-moon.svg'

function Navbar(toggleDarkmode) {
  return (
    <div className='flex justify-between align-center mt-6'>
        <div>
            <img src={logo} alt="book"/>

        </div>
        <div className='ml-auto border-r-2'>
                <select className='mr-4 align-center' onChange={(e)=>console.log(e.target.value)}>
                    <option value="serif">Serif</option>
                    <option value="serif1">serif1</option>
                    <option value="serif2">serif2</option>
                </select>
        </div>
        <div>
            <label className="relative inline-flex items-center cursor-pointer ml-6">
                <input type="checkbox" value="" className="sr-only peer" onClick={toggleDarkmode}/>
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                {/* <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Mode</span> */}
                <img className='ml-6' src={moon} alt="" />
            </label>
        </div>
    </div>
  )
}

export default Navbar