import React from 'react';
import { Navbar, Nav, NavDropdown, Card} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

  const Top = (props) => {
      return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home"><i class="fas fa-flask"></i> Northwest Labs</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <NavDropdown title="Log Out" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Log In</NavDropdown.Item>
                </NavDropdown>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/help">Help</Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
      );
    }

    export default Top;