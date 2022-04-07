import React, { useState } from 'react';

export const Music = () => {


  return (
    <div className="card-grid">

        <div className='left-card'>
          <iframe className='vid' width="560" height="315" src="https://www.youtube.com/embed/vjk7s6ktBTs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen onMouseEnter={() => handleHover('ghoul')}></iframe>
          <span className="music-body">
          <h2 className="title">Ghoul Friends</h2>
          <p> This claymation I made is the perfect intersection of my love for playing music and crafting.
          </p>
        </span>
        </div>

        <div className='right-card'>
          <iframe className='vid' width="560" height="315" src="https://www.youtube.com/embed/MyJInCv4viU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <div className="music-body">
          <h2 className="title">Atelier Backend System Design</h2>
          <p>Atelier System
          </p>
        </div>
        </div>

        <div className='left-vimeo'>
        <iframe title="vimeo-player" className='vid' src="https://player.vimeo.com/video/222915625?h=24371e9963" width="640" height="320" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>
        <div className="music-body">
          <h2 className="title">Atelier Backend System Design</h2>
          <p>Atelier System Design
          </p>
        </div>
        </div>

        <div className='right-card'>
        <iframe className='vid' width="560" height="315" src="https://www.youtube.com/embed/DMV5KWYV95A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
        <div className="music-body">
          <h2 className="title">Atelier Backend System Design</h2>
          <p>Atelier System Design
          </p>
        </div>
        </div>

    </div>
  )
}