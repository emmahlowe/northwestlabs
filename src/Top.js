import React from 'react';
import AppContext from "./context";
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {
  Link
} from "react-router-dom";

  const Top = (props) => {
    const context = React.useContext(AppContext);
      return (
        <Navbar collapseOnSelect expand="lg" className="d-flex text-dark">
            <Navbar.Brand href="#home"><i className="fas fa-flask"></i> Northwest Labs</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/help">Help</Link>
                <NavDropdown title="Log Out" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Log In</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>

            <form className="form-inline my-2 my-lg-0">
              <Link className="fa fa-shopping-cart mr-sm-2 mr-2" to="/cart"></Link>
              <p className="my-2 my-sm-0 mr-2">{context.cartCount}</p>
            </form>
             
        </Navbar>
      );
    }

    export default Top;