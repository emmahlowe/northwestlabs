import React from 'react';
import { Col, Nav } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  
  const Left = (props) => {
      return (
            <Nav defaultActiveKey="/home" className="flex-column">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/help">Help</Link>
            </Nav>
        
      );
    }

    export default Left;