import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const Registration = () => {
  const { signInUsingGoogle } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // user registration
  const handleRegistration = (e) => {
    console.log(email, password);
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        setUserName();
        //console.log(user);
        history.push(redirect_uri);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  // set user name
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  return (
    <div className="container">
      <h2 className="fw-bold mt-3 mb-3">Welcome to Registration!</h2>
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-5 col-sm-12">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter name</Form.Label>
              <Form.Control
                className="rounded-pill"
                type="text"
                placeholder="Enter your name"
                onBlur={handleNameChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="rounded-pill"
                type="email"
                placeholder="Enter email"
                onBlur={handleEmailChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="rounded-pill"
                type="password"
                placeholder="Password"
                onBlur={handlePasswordChange}
              />
            </Form.Group>
            <Button
              className="rounded-pill mb-2"
              variant="primary"
              type="submit"
              onClick={handleRegistration}
            >
              Registration
            </Button>
          </Form>
          <button
            onClick={signInUsingGoogle}
            className="btn btn-warning rounded-pill"
          >
            Google Sign In
          </button>
          <p>
            Don't have an account?{" "}
            <Link to="/login" className="text-decoration-none ps-2">
              <a variant="warning" type="submit">
                Registration
              </a>
            </Link>
          </p>
        </div>
        <div className="col-md-7 col-sm-12">
          <img
            className="w-75"
            src="https://img.freepik.com/free-vector/health-insurance-abstract-concept-illustration-health-insurance-contract-medical-expenses-claim-application-form-agent-consultation-sign-document-emergency-coverage_335657-198.jpg"
            alt="doctor"
          />
        </div>
      </div>
    </div>
  );
};

export default Registration;
