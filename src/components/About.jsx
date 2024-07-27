import React from 'react'
import "./About.css"

function About({theme}) {
  return (
    <div>
       <div class= "about">
          <div class="left ">
            <img src={theme ? "./portfolio.png" : "./portfolio2.png"} data-aos="fade-right" />
          </div>
          <div class="right">
            <h1 data-aos="fade-down">About <span>Me</span></h1>
            <h3 data-aos="fade-left">Hello!, I'm Deepak Kumar</h3>
            <p data-aos="fade-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              adipisci deserunt magnam in tempora saepe iure dolores ex odit
              consectetur?
            </p>
            <div class="icons" data-aos="fade-up">
              <a href=""><i class="fa-brands fa-facebook"></i></a>
              <a href=""> <i class="fa-brands fa-instagram"></i></a>
              <a href=""><i class="fa-brands fa-github"></i></a>
              <a href=""><i class="fa-brands fa-youtube"></i></a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About
