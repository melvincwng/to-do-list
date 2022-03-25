import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Todolist from "./components/Todolist";
import Todolist2 from "./components/Todolist2";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Button, Col } from "react-bootstrap";

function App() {
  const [newListName, setNewListName] = useState("");
  const [todoLists, setTodoLists] = useState([
    {
      id: uuidv4(),
      title: "Urgent tasks",
    },
  ]);

  const addNewList = (e) => {
    if (newListName === "") {
      alert("Please add a name for the new list!");
      return;
    }

    e.preventDefault();
    setTodoLists([
      ...todoLists,
      {
        id: uuidv4(),
        title: newListName,
      },
    ]);
    setNewListName("");
  };

  return (
    <Container fluid className="justify-content-center">
      <Row className="header">
        <Col className="text-left" xs={12}>
          To-do-list
        </Col>
      </Row>
      <Row>
        <form>
          <input
            type="text"
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            placeholder="name for new list"
            aria-label="filter-text-2"
          ></input>
          <button type="button" onClick={(e) => addNewList(e)}>
            Add new list
          </button>
        </form>
      </Row>
      <Row fluid className="justify-content-left">
        {todoLists.map((todoList) => (
          <Todolist key={todoList.id} title={todoList.title} />
        ))}
      </Row>
    </Container>
  );
}

export default App;
