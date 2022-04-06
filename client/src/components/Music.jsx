import React from 'react';

export const Music = () => {

  return (
    <div className='music-videos'>
      <iframe className='vid-left' width="560" height="315" src="https://www.youtube.com/embed/vjk7s6ktBTs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <iframe className='vid-right' width="560" height="315" src="https://www.youtube.com/embed/MyJInCv4viU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <iframe title="vimeo-player" className='vid-left' src="https://player.vimeo.com/video/222915625?h=24371e9963" width="560" height="315" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>
      <iframe className='vid-right' width="560" height="315" src="https://www.youtube.com/embed/DMV5KWYV95A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
    </div>
  )
}