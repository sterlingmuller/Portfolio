import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './components/Home.jsx';
import { Connect } from './components/Connect.jsx';
import { Projects } from './components/Projects.jsx';
import { Music } from './components/Music.jsx';
import { Header } from './components/Header.jsx';

const RouteComponent = () => {

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="connect" element={<Connect />} />
        <Route path="music" element={<Music />} />
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={
          <main style={{ padding: "1rem" }}>
            <p>This page doesn't exist!</p>
          </main>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteComponent;