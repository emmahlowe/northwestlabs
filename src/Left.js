import React from 'react';
import { Nav } from 'react-bootstrap';
import PRODUCTS from './products';
import {
  Link
} from "react-router-dom";

function Left(props) {
  const categories = {} //empty dict
  for (let p of Object.values(PRODUCTS)) {
    if (p.category in categories) {
      categories[p.category] += 1 //adds one to the count
    }
    else { //creates new dict item with value of 1
      categories[p.category] = 1
    }
  }

  return (
    <Nav defaultActiveKey="/home" link="black" className="flex-column text-dark">
      <Link to={"/"} className="nav-link">All Products ({Object.values(PRODUCTS).length})</Link>
      {Object.entries(categories).map(([c, count]) => (
        // <a className="nav-link" href="/">{c} ({count})</a>
        <Link to={"/category/" + c} key={c} className="nav-link">{c} ({count})</Link>
      ))}
    </Nav>
  );
}
export default Left;