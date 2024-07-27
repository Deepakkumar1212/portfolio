import React from "react";
import "./Footer.css";
import { FaLocationArrow } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <section className="footer" >
      <div className="mainLocation">
        <h1>Portfolio</h1>
        <p><FaLocationArrow /> Delhi</p>
        <p><IoPhonePortraitOutline /> +91 2724257252</p>
        <div className="icons">
            <a href=""><i className="fa-brands fa-facebook"></i></a>
            <a href=""> <i className="fa-brands fa-instagram"></i></a>
            <a href=""><i className="fa-brands fa-github"></i></a>
            <a href=""><i className="fa-brands fa-youtube"></i></a>
        </div>
      </div>

      <div className="links-section">
        <h1>Important Links</h1>
        <ul>
          <li>
            <span>&#11162;</span>Home
          </li>
          <li>
            <span>&#11162;</span>About
          </li>
          <li>
            <span>&#11162;</span>Services
          </li>
          <li>
            <span>&#11162;</span>Skills
          </li>
          <li>
            <span>&#11162;</span>Projects
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
