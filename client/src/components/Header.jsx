import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


export const Header = () => {
  const { pathname } = useLocation();
  const [color, setColor] = useState('#f3989e');

  function handleClick (color) {
    setColor(color);
  }
  return (
    <div>
      <span className='header'>
        <Link to='/home' className='headerLink home' onClick={() => handleClick('#f3989e')}>Home
        <div className={`${pathname === '/' || pathname === '/home' ? 'link-indicator-selected' : 'link-indicator'}`}>•</div>
        </Link> /
        <Link to='/projects' className='headerLink projects' onClick={() => handleClick('#dfb2f4')}>Projects
        <div className={`${pathname === '/projects' ? 'link-indicator-selected' : 'link-indicator'}`}>•</div>
        </Link> /
        <Link to='/music' className='headerLink music' onClick={() => handleClick('#ebe5ab')}>Music
        <div className={`${pathname === '/music' ? 'link-indicator-selected' : 'link-indicator'}`}>•</div>
        </Link> /
        <Link to='/connect' className='headerLink connect' onClick={() => handleClick('#7cd6c9')}>Connect
        <div className={`${pathname === '/connect' ? 'link-indicator-selected' : 'link-indicator'}`}>•</div>
        </Link>
      </span>
      <h1 className="title" style={{"color": color}}>All About Sterling</h1>
    </div>
  )
}