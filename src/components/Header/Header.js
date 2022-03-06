import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import doctor from '../../images/oral-care.svg';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/"  className='d-flex align-items-center justify-content-center'>
          <img src={doctor} style={{width:"20px"}}/>ProDenti 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/aboutus">
                About us
              </Nav.Link>
              <Nav.Link as={Link} to="/registration">
                Register
              </Nav.Link>
              {user?.email ? (
                <>
                  <Navbar.Text className="mr-2">
                    Sign in as {user?.displayName}
                  </Navbar.Text>
                  <Button onClick={logOut} variant="light">
                    Logout
                  </Button>
                </>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login{" "}
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
