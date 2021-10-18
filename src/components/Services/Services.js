import React from 'react'
import { useParams } from 'react-router';
import Service from '../Service/Service';
import { useEffect, useState,  } from 'react'
import {Row} from 'react-bootstrap';

const Services = () => {
    const {serviceid} = useParams()

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
                services.map( service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
        </div>
    )
}

export default Services;
