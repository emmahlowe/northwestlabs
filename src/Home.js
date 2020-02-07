import React from 'react';
import PRODUCTS from './products';
import { useParams } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";

function Products(props) {
  let { c } = useParams()
  
  
 
  return (
    <>
    {Object.values(PRODUCTS)
    .filter(p => {
       if (p.category == c)
      {
        console.log(c, p.category)
        return p.category === c//add a card
      }
      else if (null == c)
      {
        return true;
      } 
    })
    .map((p) => (

   
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
      ))}
    </>
    
  )


}


export default Products;