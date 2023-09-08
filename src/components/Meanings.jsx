import React from 'react'

function Meanings({data, setResult}) {
  return (
    <>
    <div className='text-xl text-start'>
        <div>
            <p className='italic font-bold text-3xl'>{data.partOfSpeech}</p>
            <br></br>
        </div>
        <div className=''>Meaning:</div>
        {data && data.definitions && data.definitions.map((item)=>(
            <div>
                <li>{item.definition}</li>
                <div className='text-lg'>{item && item.synonyms.length >= 1 ? 'Synonyms:' : ""}
                {item && item.synonyms.map((word)=>((<li className='text-fuchsia-600 list-none italic cursor-pointer' onClick={()=>setResult(word)}>{word}</li>)))}
                </div>
                <br></br>
            </div>
        ))}
    </div>
    </>
  )
}

export default Meanings