import React from 'react';

export const Music = () => {


  return (
    <div className="card-grid">

        <div className='left-card'>
          <iframe className='vid' width="560" height="315" src="https://www.youtube.com/embed/vjk7s6ktBTs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <span className="music-body">
          <h2 className="title">Ghoul Friends</h2>
          <p> Ghoul Friends is a 6-piece avante garde / chamber pop band featuring clarinet, viola, synths, and trumpet. This claymation I made displays the intersection of two my passions, playing music and crafting.
          </p>
        </span>
        </div>

        <div className='right-card'>
          <iframe className='vid' width="560" height="315" src="https://www.youtube.com/embed/MyJInCv4viU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <div className="music-body">
          <h2 className="title">Cryptocam</h2>
          <p style={{"direction": "ltr"}}>Cryptocam is a photography game created by Kat Harrington and set to release in October 2022. This video features the Title Track from the soundtrack I composed.
          </p>
        </div>
        </div>

        <div className='left-vimeo'>
        <iframe title="vimeo-player" className='vid' src="https://player.vimeo.com/video/222915625?h=24371e9963" width="640" height="320" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowFullScreen></iframe>
        <div className="music-body">
          <h2 className="title">Dead Sally</h2>
          <p>Dead Sally is a five-piece folk punk band and was my first expierence as the front-person of a band. The music video for "Virus" was directed by Luke Porter.
          </p>
        </div>
        </div>

        <div className='right-card'>
        <iframe className='vid' width="560" height="315" src="https://www.youtube.com/embed/DMV5KWYV95A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <div className="music-body">
          <h2 className="title">Red Blue One Two</h2>
          <p style={{"direction": "ltr"}}>Red Blue One Two is a four-piece indie rock band that I played drums for throughout college. The live taping of "Katie" was filmed for the That's Awesome webseries.
          </p>
        </div>
        </div>

    </div>
  )
}