import React from 'react';
import PRODUCTS from './products';
import { Col, Card } from 'react-bootstrap';

// const Home = (props) => {
//   return <p>Home</p>;
//   }
// let base = "public\media\products\"
// {require('/media/products/' + p.filename + '-1.png')} mine
//'./media/products/apple-1.png'
// {require(`/media/products/${p.filename}-1.png`)} jacoby

const Products = (props) => (
  
  <>
    {
    Object.values(PRODUCTS).map((p) => (
      <Col className="mb-4">
      <Card>
        <div>
          <a href="#" class="btn btn-dark position-absolute">Details</a>
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