import React from 'react'
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id, img, servicename, description} = service;
    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={img} rounded/>
          <Card.Body>
            <Card.Title className="fw-bold">{servicename}</Card.Title>
            <Card.Text>
              {description.slice(0,150)}
            </Card.Text>  
            <Link to={`/servi/${id}`}>
            <Button variant="warning">More info {servicename.toLowerCase()}<span><i className='bx bx-right-arrow-alt'></i></span></Button>
            </Link>          
          </Card.Body>
        </Card>
      </Col>
    )
}

export default Service;
