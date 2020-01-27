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
import Home from './Home';
import Right from './Right';
import Left from './Left';
import Center from './Center';
import Footer from './Footer';
import './App.css';

function App() {
  return (
      <Router>

        <Top></Top>

        <Container fluid>
          <Row className="bg-warning content"> 
            <Col md="2">
              <Left></Left>
            </Col>

            <Col md="8" className="text-left">
              <Card body> 
              <Center></Center>
              {/* React Router Start */}
                <Switch>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/help">
                    <Help />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
                {/* React Router End */}
                
              </Card>
            </Col>

            <Col md="2">
              <Right></Right>  
            </Col>
          </Row> 
        </Container>
        
        <Footer></Footer>

    </Router>
  );
}

export default App;
