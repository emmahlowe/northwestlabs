import React from 'react';
import { Row, Col } from 'react-bootstrap';

  const Footer = (props) => {
      return (
        <Row className="text-center">
          <Col className="bg-dark footer container text-light"> &copy; 2020 Northwest Labs</Col>
        </Row>
      );
    }

    export default Footer;