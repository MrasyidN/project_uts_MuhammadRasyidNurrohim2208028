import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigationbar = () => {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">RASYID</Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/">HOME</Nav.Link>
          <Nav.Link as={Link} to="about">ABOUT</Nav.Link>
          <Nav.Link as={Link} to="contact">CONTACT</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
