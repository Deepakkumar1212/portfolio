import React from "react";
import "./Skill.css";

function Skills({theme}) {
  const skills = [
    {
      title: "HTML",
      icon: "fab fa-html5",
      color: "#FF5733",
    },
    {
      title: "CSS",
      icon: "fab fa-css3-alt",
      color: "#264de4"
    },
    {
      title: "JavaScript",
      icon: "fab fa-js",
      color: "#f0db4f"
    },
    {
      title: "React",
      icon: "fab fa-react",
      color: "#61DBFB"
    },
    {
      title: "Node",
      icon: "fab fa-node",
      color: "#3c873a"
    },
    {
      title: "MongoDB",
      icon: "fas fa-database",
      color: "#4db33d"
    },
    {
      title: "Java",
      icon: "fab fa-java",
      color: "#1F868D"
    },
  ];

  return (
    <div className="skills">
      <h1>SKILLS</h1>
      <div className="items">
        {skills.map((data, index) => (
          <div
            className="item"
            key={index}
            data-aos="fade-right"
          >
            <i className={data.icon} style={{ color: data.color }} data-aos="flip-right"></i>
            <h3 data-aos="fade-down" data-aos-delay="1500">{data.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
