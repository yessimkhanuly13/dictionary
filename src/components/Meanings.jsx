import React from 'react'

function Meanings({data}) {
  return (
    <>
    <div className='text-xl text-start'>
        <p>{data.partOfSpeech}</p>
        {data && data.definitions && data.definitions.map((item)=>(
            <div>
                <p>{item.definition}</p>
                <div className='text-s'>Synonyms:
                {item && item.synonyms.map((word)=>((<li>{word}</li>)))}
                </div>
            </div>
        ))}
    </div>
    </>
  )
}

export default Meanings