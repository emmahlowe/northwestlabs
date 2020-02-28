import React from "react";
import { Nav } from "react-bootstrap";
import AppContext from "./context";
import { Link } from "react-router-dom";

function Left(props) {
  const context = React.useContext(AppContext);

  return (
    <Nav
      defaultActiveKey="/home"
      link="black"
      className="flex-column text-dark"
    >
      <Link to={"/"} className="nav-link">
        All Products ({context.products.length})
      </Link>
      {context.categories.map(cat => (
        // <a className="nav-link" href="/">{c} ({count})</a>
        <Link to={"/category/" + cat.id} key={cat.id} className="nav-link">
          {cat.title} (
          {context.products.filter(product => product.category.id === cat.id).length})
        </Link>
      ))}
    </Nav>
  );
}
export default Left;
