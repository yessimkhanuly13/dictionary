import React from 'react'
import AudioPlayer from './AudioPlayer'
import Meanings from './Meanings'

function WordInfo({result, setResult}) {

  return (
    <>
      <div className='text-start w-full mt-12 flex justify-around'>
        <div className='flex flex-col justify-center'>
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
      <div>
          {
            result && result.meanings && result.meanings.map((item)=>(<Meanings data={item} setResult={setResult}/>))
          }
      </div>
    </>
  )
}

export default WordInfo