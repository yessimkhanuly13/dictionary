import React from 'react'
import error from '../assets/isometric-error.png'

function Error() {
  return (
    <div className='text-lg flex align-center justify-center mt-16 font-bold flex-col'>
        
        <img className='m-auto w-16 h-16 mb-4' src={error} alt="" />
        
        <span>No Definitions Found</span>
        <br></br>
        <span>Sorry pal, we couldn't find definitions for the word you were looking for.</span>
        <div className='h-screen'></div>
    </div>
  )
}

export default Error