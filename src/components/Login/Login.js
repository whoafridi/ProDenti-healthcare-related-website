import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleGooglelogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  function handleLogin(e) {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        history.push(redirect_uri);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  return (
    <div className="container">
      <h2 className="fw-bold mt-3 mb-3">Welcome to Login!</h2>
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-5 col-sm-12">
          <Form>
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
              variant="primary"
              type="submit"
              onClick={handleLogin}
              className="rounded-pill mb-2"
            >
              Login
            </Button>
          </Form>
          <button
            onClick={handleGooglelogin}
            className="btn btn-warning rounded-pill"
          >
            Google Sign In
          </button>
          <p>
            Don't have an account?{" "}
            <Link to="/registration" className="text-decoration-none ps-2">
              <a variant="warning" type="submit">
                Login
              </a>
            </Link>
          </p>
        </div>
        <div className="col-md-7 col-sm-12">
          <img
            className="w-75"
            src="https://img.freepik.com/free-vector/family-doctor-abstract-concept-illustration-visit-your-doctor-medical-family-practice-primary-healthcare-provider-general-practitioner-physician-service-insurance-abstract-metaphor_335657-520.jpg"
            alt="doctor"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
