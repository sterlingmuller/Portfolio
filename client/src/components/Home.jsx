import React, { useState, useEffect, useContext } from 'react';
import { MainContext } from '../MainContext.js';
import { useNavigate } from "react-router-dom";

export const Home = () => {

  return (
    <div>
      <p>Welcome to my home. <br/>
        Take off your shoes and stay awhile
      </p>
      <p>
        My name is Sterling Muller. <br/>
        I am Fullstack software engineer, punk rocker, and avid crafter <br/>
        looking to build up communities through meaningful and well-designed applications.
      </p>
      <p>
      I took my first steps into the world of software engineering at the start of the pandemic and surprised myself by how entrenched I would be in whatever problem I was working on. I love puzzles and tinkering and found that overcoming a coding challenge gave me that same sense of fulfillment I would get by sewing a new vest or putting the finishing touches on a claymation project.
      </p>
      <p>
      Software engineering is basically magic and was pioneered by people way smarter than me. I’m constantly amazed by stories of how the computer for the moon landing was coded with punch cards or how Alan Turing built a chessbot too complex for any computer at the time to run. It's amazing that now, anybody can learn to code and we’re truly standing on the shoulders of giants.
Obviously, I'm no Turing, but I'm always eager to learn new things and love putting passion into what I create.
      </p>
    </div>
  )
}