import { Button, InputGroup, FormControl } from "react-bootstrap";
import "./Footer.css";
import doctor from "../../images/t.svg";

const Footer = () => {
  return (
    <div className="container mt-5 footer">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-4 col-sm-12">
          <img
            src={doctor}
            className="title w-50 ms-5 mt-4"
            style={{ backgroundColor: "" }}
          />
          <p className="title ms-5">ProDenti : A dental solutions</p>
        </div>
        <div className="col-md-4 col-sm-12">
          <h2 className="text-center title">Our services</h2>
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <p className="title">Cavity Protection</p>
              <p className="title">Implant Dentistry</p>
              <p className="title">Cosmetic Dentistry</p>
            </div>
            <div className="col-md-6 col-sm-6">
              <p className="title">Teeth Whitening</p>
              <p className="title">Teeth Cleaning</p>
              <p className="title">Orthodontics</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <h2 className="title text-center">About company</h2>
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <p className="title">Home</p>
              <p className="title">About</p>
              <p className="title">Contact</p>
            </div>
            <div className="col-md-6 col-sm-6">
              <p className="title">Blog</p>
              <p className="title">Services</p>
              <p className="title">FAQs</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="row">
        <div className="col-md-6 justify-content-end">
          <p className="text-center mt-2 title">
            Copyright © 2022 ProDenti All Rights Reserved.
          </p>
        </div>
        <div className="col-md-6 justify-content-end">
          <div className="icons mt-2">
            <h4>
              <i className="bx bxl-facebook-circle"></i>
            </h4>
            <h4>
              <i className="bx bxl-twitter"></i>
            </h4>
            <h4>
              <i className="bx bxl-linkedin"></i>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
