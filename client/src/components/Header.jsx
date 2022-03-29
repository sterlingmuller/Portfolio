import React from 'react';
import { Link, useLocation } from 'react-router-dom';


export const Header = () => {
  const { pathname } = useLocation();

  console.log('page:::', pathname)
  return (
    <div>
      <span className='header'>
        <Link to='/home' className='headerLink home'>Home
        <div className={`${pathname === '/' || pathname === '/home' ? 'link-indicator-selected' : 'link-indicator'}`}>•</div>
        </Link> /
        <Link to='/projects' className='headerLink projects'>Projects
        <div className={`${pathname === '/projects' ? 'link-indicator-selected' : 'link-indicator'}`}>•</div>
        </Link> /
        <Link to='/music' className='headerLink music'>Music
        <div className={`${pathname === '/music' ? 'link-indicator-selected' : 'link-indicator'}`}>•</div>
        </Link> /
        <Link to='/connect' className='headerLink connect'>Connect
        <div className={`${pathname === '/connect' ? 'link-indicator-selected' : 'link-indicator'}`}>•</div>
        </Link>
      </span>
      <h1>All About Sterling</h1>
    </div>
  )
}