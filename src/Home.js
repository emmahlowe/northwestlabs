import React from 'react';
import PRODUCTS from './products';
import { Col, Card } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";

const Products = (props) => (
  <>
  
    {
    Object.values(PRODUCTS).map((p) => (
      <Col className="mb-4" key={p.id.toString()}>
      <Card>
        <div>
          <Link to={`/details/${p.id}`} className="btn btn-dark position-absolute top-right">Details</Link> 
          <Card.Img variant="top" src={'/media/products/' + p.filename + '-1.png'} alt={p.name}/>
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


export default Products;