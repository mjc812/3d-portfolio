import React from 'react'
import './Video.css';

const Video = () => {
  return (
    <div className='video-container'>
      <iframe  
        src="https://www.youtube-nocookie.com/embed/cRMgyxhZQyw" 
        title="YouTube video"
        allowFullScreen
        >
      </iframe>
    </div>
  )
}

export default Video