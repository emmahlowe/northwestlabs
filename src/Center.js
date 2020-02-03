import React from 'react';
import { CardDeck, Row } from 'react-bootstrap';
import Home from './Home.js'

  const Center = (props) => {
      return (
        <>
        <Row>
        <CardDeck className="row-cols-4">
          
         {/* const printP = "My products are: " + PRODUCTS.map((p, i) => {
           console.log(p)
         }) */}
         <Home></Home> 
            
      </CardDeck>
      </Row>
        </>
      );
    }

    export default Center;