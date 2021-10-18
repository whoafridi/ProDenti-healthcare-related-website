import React from 'react';
import './Registration.css'
import { Form, Button } from 'react-bootstrap';

const Registration = () => {
    const handleSubmit = e =>{
        e.preventDefault();
    }
    return (
        <div className="container">
            <h2 className="fw-bold mt-3 mb-3">Welcome to Registration!</h2>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
            </Form>
        </div>
    )
}

export default Registration;
