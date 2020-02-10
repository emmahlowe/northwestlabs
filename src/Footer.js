import React from 'react';
import { Row, Col } from 'react-bootstrap';

  const Footer = (props) => {
      return (
        <Row className="text-center">
          <Col className="footer container text-dark"> &copy; 2020 Northwest Labs</Col>
        </Row>
      );
    }

    export default Footer;