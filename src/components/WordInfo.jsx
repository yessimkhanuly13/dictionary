import React from 'react'
import AudioPlayer from './AudioPlayer'

function WordInfo({result}) {

  return (
    <div className='text-start w-full mt-12 flex justify-between'>
      <div className='mt-2'>
        <p className='text-4xl font-bold'>{result.word}</p>
        <p className='italic'>{result.phonetic}</p>
      </div>
        {
          result && result.phonetics && result.phonetics[0] && result.phonetics[0].audio && 
          (
          <AudioPlayer audio={result.phonetics[0].audio} />
          )
        }
          {/* <img src={play}/> */}
    </div>
  )
}

export default WordInfo