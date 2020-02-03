import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Top from './Top';
import Help from './Help';
import About from './About';
import Right from './Right';
import Left from './Left';
import Center from './Center';
import Footer from './Footer';
import './App.css';

function App() {
  return (
      <Router>
        <Container fluid className="d-flex flex-column min-vh-100 p-0">
          <Row>
            <Col md="12" className="pr-0 border">
            <Top></Top>
            </Col>
          </Row>
        
          <Row className="content flex-grow-1 border"> 
            <Col md="2" className="text-center border">
              <Left></Left>
            </Col>

            <Col md="8" className="text-center p-0">
              <Card body> 
              
              {/* React Router Start */}
                <Switch>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/help">
                    <Help />
                  </Route>
                  <Route path="/">
                    <Center />
                  </Route>
                </Switch>
                {/* React Router End */}
                <Center></Center> 
              </Card>
            </Col>

            <Col md="2" className="text-center border">
              <Right></Right>  
            </Col>
          </Row> 
          <Footer></Footer>
        </Container>
    </Router>
  );
}

export default App;
