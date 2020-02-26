import React from 'react';
import { NavbarBrand, Navbar, Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="fixed-bottom">
      <Navbar bg="light">
        <Container>
          <NavbarBrand>Footer</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
