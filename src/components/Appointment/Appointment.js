import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

const Appointment = () => {
    return (
        <div className="container">
            <h2>Make appoint for this services</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter address" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Appointment
                </Button>
                <Link to='/service'>
                <Button variant="warning" type="submit" className="ms-2">
                    Back to services
                </Button>
                </Link>
            </Form>
            
        </div>
    )
}

export default Appointment
