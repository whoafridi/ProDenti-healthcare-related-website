import React, { useEffect, useState } from "react";
import { Row, Button } from "react-bootstrap";
import "./Home.css";
import Faq from "../Faq/Faq";
import Review from "../Review/Review";
import Detail from "../Detail/Detail";
import Slider from "../Slider/Slider";
import { Link } from "react-router-dom";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/whoafridi/Play-with-JavaScript/master/services.json"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  let serve = services.slice(0, 6);
  return (
    <div className="container">
      <Slider></Slider>
      <h2 className="text-center fw-bold danger">Our services</h2>
      {serve.length === 0 ? (
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Row xs={1} md={3} className="g-4">
          {serve.map((service) => (
            <Detail key={service.id} service={service}></Detail>
          ))}
        </Row>
      )}
      <div className="btn-container mt-2">
        <Link to="/services">
          <Button variant="warning" className="mt-4 rounded-pill">
            More services
            <span>
              <i className="bx bx-right-arrow-alt"></i>
            </span>
          </Button>
        </Link>
      </div>
      <Review></Review>
      <Faq></Faq>
    </div>
  );
};

export default Home;
