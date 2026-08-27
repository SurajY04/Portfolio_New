import { useEffect, useRef } from 'react'
import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Project from './components/Project'
import MainVideo from './assets/video_6.mp4'

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

  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }

  }, [])



  return (

        <div id="main" >
        <video
          ref={videoRef}
          className="background-video"
          autoPlay
          muted
          loop
          playsInline

        >
          <source src={MainVideo} type="video/mp4" />
        </video>
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