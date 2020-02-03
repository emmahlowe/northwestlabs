import React from 'react';
import { Nav } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";
  
  const Left = (props) => {
      return (
            <Nav defaultActiveKey="/home" link="black" className="flex-column text-dark">
                <a className="nav-link" href="/">All Products (146)</a>
                <a className="nav-link" href="/about">Office (28)</a>
                <a className="nav-link" href="/about">Clothes (13)</a>
                <a className="nav-link" href="/help">Food (22)</a>
                <a className="nav-link" href="/help">Household (66)</a>
                <a className="nav-link" href="/help">Other (16)</a>
                <a className="nav-link" href="/help">Ducks (1)</a>
            </Nav>
        
      );
    }

    export default Left;