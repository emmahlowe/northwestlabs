import React from 'react';
import { Col, Nav } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  
  const Left = (props) => {
      return (
        <Col sm={2} className="sidenav">
            <Nav defaultActiveKey="/home" className="flex-column">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/help">Help</Link>
            </Nav>
        </Col>
      );
    }

    export default Left;