import React, { useState } from 'react';

export const Home = () => {
  const [wiggle, setWiggle] = useState(false);

  function handleClick () {
    setWiggle(true);
    setTimeout(() => setWiggle(false), 1000);
  }

  return (
    <div id='about'>
      <div className="container">
      <img src={'./photo.jpg'} className={wiggle ? "photo wiggle" : "photo"}></img>
      </div>
      <div className="bio">
      <p>Welcome to my
        <span style={{ 'color': '#f3989e', 'fontWeight': 'bold'}}> home</span>
        . Take off your shoes and stay awhile.
      </p>
      <p>
      My name is
      <span className='home-link' onClick={() => handleClick()}> Sterling Muller</span>. <br/>
      I am fullstack software engineer, with a particular interest in frontend development,
        looking to build up communities through meaningful and well-designed applications.
      </p>
      <p>
      Outside of coding, I like to spend my time playing guitar with my band,
      <a className='home-link' href='https://ghoulfriends.bandcamp.com/album/i-was-hungry-so-i-ate' target='_blank'> Ghoul Friends</a>, volunteering at
      <a className='home-link' href='https://www.bartramsgarden.org/explore-bartrams/schuylkill-river-and-dock/' target='_blank'> Bartram's Garden Community Boathouse</a>, or getting lost in a crafting project.
      </p>
      </div>
    </div>
  )
}