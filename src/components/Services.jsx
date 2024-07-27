import React from "react";
import "./Services.css";

function Services({ theme }) {
  const cardData = [
    {
      icon: "fa-solid fa-paintbrush",
      title: "Graphic Design",
    },
    {
      icon: "fa-solid fa-code",
      title: "Web Development",
    },
    {
      icon: "fa-solid fa-bag-shopping",
      title: "Media Marketing",
    },
    {
      icon: "fa-solid fa-desktop",
      title: "Web Design",
    },
    {
      icon: "fa-solid fa-photo-film",
      title: "Motion Graphics",
    },
    {
      icon: "fa-solid fa-mobile-screen-button",
      title: "Apps",
    },
  ];

  return (
    <>
      <div className="service">
        <h1 className="section-heading">
          <span>Our</span> Services
        </h1>
        <p className="para">
          We provide high standard clean website for your business solutions
        </p>

        <div className="card-wrapper">
          {cardData.map((data, index) => (
            <div
              className="card"
              key={index}
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <i className={data.icon}></i>
              <h2>{data.title}</h2>
              <p>
                There are many variations of passages of but the majority have
                suffered alteration in some form.
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
