import React from "react";
import './App.css';
import Todolist from './components/Todolist';
import Todolist2 from './components/Todolist2'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Button, Col } from "react-bootstrap";

function App() {
  return (
    <Container fluid className="justify-content-center">
      <Row className="header">
        <Col className="text-left" xs={12}>
          To-do-list
        </Col>
      </Row>
      <Row>
      <div className="column row"><Todolist /></div>
      <div className="column row"><Todolist2 /></div>
      </Row>
    </Container>
  );
}

export default App;
