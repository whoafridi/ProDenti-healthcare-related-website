import React from 'react'
import { useEffect, useState,  } from 'react'
import {Row} from 'react-bootstrap';
import Details from '../Details/Details';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/whoafridi/Play-with-JavaScript/master/services.json")
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

    return (
        <div className="container">
            <h2 className="mt-3 fw-bold text-center mb-3">Our All Services</h2>
            <Row xs={1} md={3} className="g-4">
                {
                services.map( service => <Details key={service.id} service={service}></Details>)
                }
            </Row>
        </div>
    )
}

export default Services;
