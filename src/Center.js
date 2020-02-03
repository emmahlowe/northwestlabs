import React from 'react';
import { Card, CardDeck, Row, Col } from 'react-bootstrap';

  const Center = (props) => {
      return (
        <>
        <Row>
        <CardDeck className="row-cols-4">
          
         {/* const printP = "My products are: " + PRODUCTS.map((p, i) => {
           console.log(p)
         }) */}
          
            <Col className="mb-4">
            <Card>
            <div>
                <a href="#" class="btn btn-dark position-absolute">Details</a>
                <Card.Img variant="top" src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              </div>          
              <Card.Footer>
                <p>Phone</p>
                <p>$37.00</p>
              </Card.Footer>
            </Card>
            </Col>
          
          <Col className="mb-4">
        <Card>
        <div>
            <a href="#" class="btn btn-dark position-absolute">Details</a>
            <Card.Img variant="top" src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>          
          <Card.Footer>
            <p>Phone</p>
            <p>$37.00</p>
          </Card.Footer>
        </Card>
        </Col>
        <Col className="mb-4">
        <Card>
        <div>
            <a href="#" class="btn btn-dark position-absolute">Details</a>
            <Card.Img variant="top" src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>          
          <Card.Footer>
            <p>Phone</p>
            <p>$37.00</p>
          </Card.Footer>
        </Card>
        </Col >
        <Col className="mb-4">
        <Card>
        <div>
            <a href="#" class="btn btn-dark position-absolute">Details</a>
            <Card.Img variant="top" src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>          
          <Card.Footer>
            <p>Phone</p>
            <p>$37.00</p>
          </Card.Footer>
        </Card>
        </Col>
        <Col className="mb-4">
        <Card>
        <div>
            <a href="#" class="btn btn-dark position-absolute">Details</a>
            <Card.Img variant="top" src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>          
          <Card.Footer>
            <p>Phone</p>
            <p>$37.00</p>
          </Card.Footer>
        </Card>
        </Col>
        <Col className="mb-4">
        <Card>
        <div>
            <a href="#" class="btn btn-dark position-absolute">Details</a>
            <Card.Img variant="top" src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>          
          <Card.Footer>
            <p>Phone</p>
            <p>$37.00</p>
          </Card.Footer>
        </Card>
        </Col>
        <Col className="mb-4">
        <Card>
        <div>
            <a href="#" class="btn btn-dark position-absolute">Details</a>
            <Card.Img variant="top" src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>          
          <Card.Footer>
            <p>Phone</p>
            <p>$37.00</p>
          </Card.Footer>
        </Card>
        </Col>
        <Col className="mb-4">
        <Card>
          <div>
            <a href="#" class="btn btn-dark position-absolute">Details</a>
            <Card.Img variant="top" src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>
          <Card.Footer>
            <p>Phone</p>
            <p>$37.00</p>
          </Card.Footer>
        </Card>
        </Col>
        <Col className="mb-4">
        <Card>
        <div>
            <a href="#" class="btn btn-dark position-absolute">Details</a>
            <Card.Img variant="top" src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>          
          <Card.Footer>
            <p>Phone</p>
            <p>$37.00</p>
          </Card.Footer>
        </Card>
        </Col>
      </CardDeck>
      </Row>
        </>
      );
    }

    export default Center;