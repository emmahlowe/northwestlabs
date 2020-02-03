import React from 'react';
import PRODUCTS from './products'

// const Home = (props) => {
//   return <p>Home</p>;
//   }

const Products = (props) => (
  <>
    PRODUCTS.map(image, name, price => (
      <Col className="mb-4">
      <Card>
        <div>
          <a href="#" class="btn btn-dark position-absolute">Details</a>
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Footer>
          <p>{name}</p>
          <p>{price}</p>
        </Card.Footer>
      </Card>
    </Col>
    ))
      </>
)



export default Products;