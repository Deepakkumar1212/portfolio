import React from "react";
import "./Projects.css";
import { RiExternalLinkFill } from "react-icons/ri";

function Projects() {
  const projects = [
   
    {
      key: 2,
      title: " Real EState",
      imageSrc: "./project/r1.png",
      description: "This is a project made with complete React js.",
      demo: "https://deepakkumar1212.github.io/realestate/",
    },
    {
      key: 3,
      title: "Tesla Clone",
      imageSrc: "./project/model-3.jpg",
      description: "This is a project made with complete React js.",
      demo: "https://deepakkumar1212.github.io/tesla-clone/",
    },

    {
      key: 4,
      title: "Tick Tack",
      imageSrc: "./Designer (11).png",
      description:
        "A personal portfolio website built with HTML, CSS, and JavaScript.",
      demo: "https://deepakkumar1212.github.io/tiktak/",
      
    },
    {
      key: 1,
      title: "Gym",
      imageSrc: "./project/choose-img.png",
      description: "This is a project made with complete React js.",
      demo: "https://deepakkumar1212.github.io/gym/",
    },
    {
      key: 5,
      title: "Currency Converter",
      imageSrc: "./Designer (2).png",
      description:
        "HTML CSS and Js.",
      demo: "https://deepakkumar1212.github.io/currencyConverter/",
    },
    {
      key: 6,
      title: "To-Do List App",
      imageSrc: "./Designer (13).png",
      description: "A simple to-do list app built with React and Redux.",
      demo: "https://deepakkumar1212.github.io/todo-list/",
      
    },
  ];

  return (
    <div className="container">
      <h1>Projects</h1>
      <div className="projects">
        {projects.map((data) => (
          <div className="project" key={data.key} data-aos="fade-up-left">
            <div className="image">
              <img src={data.imageSrc} alt="image" data-aos="fade-down" />
            </div>
            <div className="content">
              <h2 data-aos="fade-right">{data.title}</h2>
              <p>{data.description}</p>
              <a href={data.demo} className="btn link">
                <RiExternalLinkFill />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
