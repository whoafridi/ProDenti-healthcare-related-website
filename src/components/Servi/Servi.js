import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Servi = ({s}) => {
    const { img, description,servicename} = s;
    
    return (
        <>
            <div className="row">
                <div className="col lg-5">
                    <h2 className="text-center fe-bold">{servicename}</h2>
                    <img style={{width:"90%"}} src={img} alt={servicename}/>
                </div>
                <div className="col lg-7">
                    <p className="mt-5">{description}</p>
                </div>
            </div>
                <Link to="/services">
                    <Button variant="warning" type="submit" className="mt-2">
                        Back to services 
                    </Button>
                </Link>
                <Link to="/appointment">
                    <Button variant="primary" type="submit" className="mt-2 ms-2">Make an appointment</Button>
                </Link>
                
        </>
    )
}

export default Servi
