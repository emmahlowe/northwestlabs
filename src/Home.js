import React from 'react';
import PRODUCTS from './products';
import { useRouteMatch } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";

function Products(props) {
  let match_category = useRouteMatch('/category/:category');
  // let match_product = useRouteMatch(“/id/:id”);
  return (
    <>
      {Object.values(PRODUCTS)
        .filter(val => {
          // console.log(match_product.params.id);
          if (match_category) {
            return val.category === match_category.params.category;
          } else {
            console.log(match_category);
            return true;
          }
        })
    .map(p => {
      return(
   
        <Col className="mb-4" key={p.id.toString()}>
          <Card>
            <div>
              <Link to={`/details/${p.id}`} className="btn btn-dark position-absolute top-right">Details</Link>
              <Card.Img variant="top" src={'/media/products/' + p.filename + '-1.png'} alt={p.name} />
            </div>
            <Card.Footer>
              <p>{p.name}</p>
              <p>${p.price}</p>
            </Card.Footer>
          </Card>
        </Col>
      );
     })}
    </>
    
  )


}


export default Products;