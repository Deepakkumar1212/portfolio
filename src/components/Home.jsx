import React, { useEffect, useRef } from "react";
import "./Home.css";
import pdf from "./pdf/Resume.pdf";
import Typed from "typed.js";


function Home({ theme }) {
  const TypedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Software Engineer",
        "Web Developer",
        "Web Designer",
        "Frontend-Developer",
        "React-Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(TypedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

 

  return (
    <div>
      <div className= "hero " >
        {/* left */}
        <div className="left ">
          <img src={theme ? "./portfolio.png" : "./portfolio2.png"} alt="profile img" className="profile-img" data-aos="fade-right"/>
        </div>
        {/* right */}
        <div className="right ">
          <h6 data-aos="fade-down">Deepak Kumar</h6>
          <h1 data-aos="fade-left" className="h1Tag">
            I'm a <span ref={TypedRef}></span>
          </h1>
          <p data-aos="fade-right">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            eaque maiores voluptates recusandae est a laboriosam? Quos eveniet
            nihil illo?
          </p>
          <a
            data-aos="fade-up-left"
            data-aos-delay="1000"
            href={pdf}
            download="Resume.pdf"
            className="btn"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
