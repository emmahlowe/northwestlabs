import React from 'react';
import { CardDeck, Row } from 'react-bootstrap';
import Home from './Home.js'

  const Center = (props) => {
      return (
        <>
        <CardDeck className="row-cols-4">
          
         <Home></Home> 
            
      </CardDeck>
        </>
      );
    }

    export default Center;