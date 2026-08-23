import React from 'react'
import Contact from './Contact'
import Project_1 from '../assets/project-1.png'
import Project_2 from '../assets/project-2.png'
import Project_3 from '../assets/project-3.png'



const Project = () => {

  return (
    <div id="project-main">
      <nav>
        <div id="nav-left">
          <h1>Portfolio .</h1>
        </div>
        <div id="nav-middle">
          <div id="nav-middle-home"><a href="/">Home</a></div>
          <div id="nav-middle-project"><a href="/project">Project</a></div>
        </div>
        <div id="nav-bottom">
         <Contact/>
        </div>
      </nav>
      <div id="project-main-center">
        <div id="project">
          <div id="project-left">
            <h1>a personalized diet and workout planning application that generates a 7-day diet + workout plan based on a user's preferences and goals.

              The idea was simple: instead of giving everyone the same diet and workout routine, why not generate a plan around the individual?</h1>
            <button><h4><a href="https://di-out-planner.vercel.app/">Visit</a></h4></button>
          </div>
          <div id="project-right">
            <img src={Project_1} alt="" />
          </div>
        </div>
        <div id="project">
          <div id="project-left">
            <h1>Built an AI-powered Interview Report Generator that helps job seekers evaluate their interview readiness by analyzing their resume, self-description, and job description using Google Gemini AI.</h1>
            <button><h4><a href="https://zesty-panda-66ec5a.netlify.app/">Visit</a></h4></button>
          </div>
          <div id="project-right">
            <img src={Project_2} alt="" />
          </div>
        </div>
        <div id="project">
          <div id="project-left">
            <h1> I built a Banking Transaction System from scratch to strengthen my backend development skills and understand how secure financial applications work.</h1>
            <button><h4><a href="https://banking-project04.netlify.app/">Visit</a></h4></button>
          </div>
          <div id="project-right">
            <img src={Project_3} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project