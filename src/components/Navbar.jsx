import React from 'react'



function Navbar({toggleDarkmode}) {
  return (
    <div className='mt-6 flex align-center'>
        <div className='cursor-pointer' onClick={()=>console.log('sss')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="38" viewBox="0 0 34 38"><g fill="none" fill-rule="evenodd" stroke="#838383" stroke-linecap="round" stroke-width="1.5"><path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28"/><path stroke-linejoin="round" d="M5 37a4 4 0 1 1 0-8"/><path d="M11 9h12"/></g></svg>
        </div>


        <div className='ml-auto border border-1'>
        </div>

        <div>
            <label className="relative inline-flex items-center cursor-pointer ml-6">
                <input type="checkbox" value="" className="sr-only peer" onClick={toggleDarkmode}/>
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                <span className="ml-3 text-sm">Dark Mode</span>
                {/* <img className='ml-6 hover: ' src={moon} alt="" /> */}
                {/* <svg className='ml-6 hover:' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="none" stroke="#c026d3" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/></svg> */}
            </label>
        </div>
    </div>
  )
}

export default Navbar