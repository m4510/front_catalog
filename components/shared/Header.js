import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import Router from 'next/router';
import { signOut } from '../../actions/index';

const Header = () => {
  const onCloseSesionHandler = async () => {
    const request = await signOut();
    if (request) Router.push('/login');
  };

  return (
    <Navbar bg="light" expand="lg">
      <Link href="/" passHref>
        <Navbar.Brand>Catalogo</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/about" passHref>
            <Nav.Link>About</Nav.Link>
          </Link>
          {/* <Link href="/hola" passHref>
            <Nav.Link>Hola</Nav.Link>
          </Link> */}
        </Nav>
        <Nav>
          <Nav.Link>Iniciar Sesion</Nav.Link>
          <Nav.Link onClick={onCloseSesionHandler}>Cerrar Sesion</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
