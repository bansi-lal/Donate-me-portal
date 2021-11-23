import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Donate Me App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Super Admin</Nav.Link>
              <Nav.Link href="#pricing">Hospital</Nav.Link>
              <Nav.Link href="#pricing">Donar</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">About Us</Nav.Link>
              <Nav.Link href="#deets">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
