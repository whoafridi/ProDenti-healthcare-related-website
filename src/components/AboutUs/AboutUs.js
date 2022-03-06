import React from "react";
import about from "../../images/5540021.jpg";

const AboutUs = () => {
  return (
    <div className="container mt-3">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-5 col-sm-12">
          <h1>Welcome to ProDenti</h1>
          <p>
            Since 1980, The Dental Care has been proud to combine modern
            techniques and high-tech equipment. Dr. Sarker and his team deliver
            a personalized and comfortable dental care experience unlike any
            other Mason dentist.
          </p>
        </div>
        <div className="col-md-7 com-sm-12">
          <img src={about} className="w-100"/>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
