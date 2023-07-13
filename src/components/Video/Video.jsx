import React from 'react'
import './Video.css';

const Video = ({ href }) => {
  return (
    <div className='video-container'>
      <iframe
        height="315"
        width="560"
        src={href}
        title="YouTube video"
        allowFullScreen
        >
      </iframe>
    </div>
  )
}

export default Video