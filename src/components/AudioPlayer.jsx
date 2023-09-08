import React, { useRef, useState } from 'react'
import play from '../assets/icon-play.svg'

function AudioPlayer({audio}) {

    const [isPlaying, setIsplaying] = useState(false);
    const audioRef = useRef(null);

    const toggleAudio = () =>{
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsplaying(!isPlaying);
    }

  return (
    <div>
        <button className='bg-transparent' onClick={toggleAudio}>
            <img  src={play} alt="play" />
        </button>
        <audio className='hidden' ref={audioRef} controls src={audio}></audio> 
    </div>
  )
}

export default AudioPlayer