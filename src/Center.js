import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';

  const Center = (props) => {
      return (
        <div>
        <h2>
            <i className="fas fa-flask" style={{
            fontSize: "5rem",
            color: "#BCE6E6", }}></i> 
                
            <p>Welcome to Northwest Labs</p> 
        </h2>

        <CardDeck>
  <Card>
    <Card.Img variant="top" src="img\image1.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="../img/image2.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
     <Card.Img variant="top" src="../img/image1.jpg" /> {/*src="holder.js/100px160" /> */}
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
        </div>
      );
    }

    export default Center;