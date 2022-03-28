import React from 'react';
import { Link, useLocation } from 'react-router-dom';


export const Header = () => {
  const { pathname } = useLocation();

  console.log('page:::', pathname)
  return (
    <div>
      <h1>All About Sterling</h1>
      <div className='header'>
        <Link to='/home' className='headerLink'>Home
        <div className={`${pathname === '/' || pathname === '/home' ? 'link-indicator-selected' : 'link-indicator'}`}>.</div>
        </Link> /
        <Link to='/projects' className='headerLink'>Projects
        <div className={`${pathname === '/projects' ? 'link-indicator-selected' : 'link-indicator'}`}>.</div>
        </Link> /
        <Link to='/music' className='headerLink'>Music
        <div className={`${pathname === '/music' ? 'link-indicator-selected' : 'link-indicator'}`}>.</div>
        </Link> /
        <Link to='/connect' className='headerLink'>Connect
        <div className={`${pathname === '/connect' ? 'link-indicator-selected' : 'link-indicator'}`}>.</div>
        </Link>
      </div>
    </div>
  )
}