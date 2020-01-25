import React from 'react';
import { Row, Col } from 'react-bootstrap';

  const Footer = (props) => {
      return (
        <Row>
          <Col className="bg-light text-center" fixed="bottom"> &copy; 2020 Northwest Labs</Col>
        </Row>
      );
    }

    export default Footer;