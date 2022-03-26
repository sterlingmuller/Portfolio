import React from 'react';
import { useNavigate } from 'react-router-dom';


export const Header = () => {
  const navigate = useNavigate();

  function projectsClick() {
    navigate("/projects");
  }

  function connectClick() {
    navigate("/connect");
  }

  function musicClick() {
    navigate("/music");
  }

  function homeClick() {
    navigate("/home");
  }

  return (
    <div>
      <h1>All About Sterling</h1>
      <div>
        <input type="button" onClick={() => homeClick()} value="Home" />
        <input type="button" onClick={() => projectsClick()} value="Projects"/>
        <input type="button" onClick={()=> musicClick()} value="Music" />
        <input type="button" onClick={() => connectClick()} value="Connect" />
      </div>
    </div>
  )
}