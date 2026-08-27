import { useEffect, useRef } from 'react'
import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Project from './components/Project'

const App = () => {
  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      document.documentElement.style.setProperty(
        "--mouse-x",
        `${currentX}px`
      );

      document.documentElement.style.setProperty(
        "--mouse-y",
        `${currentY}px`
      );

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animation = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animation);
    };
  }, []);


  return (

        <div id="main" >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/project' element={<Project />} />
          </Routes>
        </BrowserRouter>
      </div>

  )
}

export default App