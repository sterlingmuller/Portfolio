import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './components/Home.jsx';

const RouteComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
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