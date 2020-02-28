import React, { useContext } from 'react';
import { useRouteMatch } from 'react-router-dom';
import AppContext from "./context";
import { Col, Card } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";

function Products() {
  const context = useContext(AppContext);
  let match_category = useRouteMatch('/category/:category');
  const customStyles = {
    left: '0px'
  }
  
  return context.products
  .filter(val => {
    if (match_category) {
        return val.category.id == match_category.params.category;
      } else {
        return true;
      }
    })
    .map(p => {
      return (
         <Col className="mb-4" key={p.id}> 
          <Card>
            <div>
              <Link to={`/details/${p.id}`} style={customStyles} className="btn btn-dark position-absolute top-right">Details</Link>
              <Card.Img variant="top" src={'/media/products/' + p.filename + '-1.png'} alt={p.name} />
            </div>
            <Card.Footer>
              <p>{p.name}</p>
              <p>${p.price}</p>
            </Card.Footer>
          </Card>
        </Col>
      );
    })
}


export default Products;