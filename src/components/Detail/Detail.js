import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Detail = ({ service }) => {
  const { id, img, servicename, description } = service;
  return (
    <Col>
      <Card className="border rounded-3 shadow p-3 mb-5 bg-body rounded h-100">
        <Link to={`/service/${id}`}>
          <Card.Img variant="top" src={img} rounded />
        </Link>
        <Card.Body>
          <Link to={`/service/${id}`} className="text-decoration-none text-dark">
            <Card.Title className="fw-bold">{servicename}</Card.Title>
            <Card.Text>{description.slice(0, 100)}</Card.Text>
          </Link>
          <Link to={`/service/${id}`}>
            <Button variant="warning" className="rounded-pill">
              See details
              <span>
                <i className="bx bx-right-arrow-alt"></i>
              </span>
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Detail;
