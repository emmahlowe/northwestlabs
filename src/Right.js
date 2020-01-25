import React from 'react';
import { Row, Col } from 'react-bootstrap';

  const Right = (props) => {
      return (
        <Col sm={2} className="sidenav bg-warning">
            <ul>
              <li>Assay #1</li>
              <li>Assay #2</li>
              <li>Assay #3</li>
              <li>Assay #4</li>
            </ul>
         </Col>
      );
    }

    export default Right;