import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {
  Link
} from "react-router-dom";

  const Top = (props) => {
      return (
        <Navbar collapseOnSelect expand="lg" className="d-flex text-dark">
            <Navbar.Brand href="#home"><i className="fas fa-flask"></i> Northwest Labs</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/help">Help</Link>
                <NavDropdown title="Log Out" id="collasible-nav-dropdown" >
                <NavDropdown.Item href="#action/3.1">Log In</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
      );
    }

    export default Top;