import React from "react";
import './TodoItem.css';

// destructure the new property "setTodo"
const TodoItem = ({ name, isDone, setTodo }) => (
    <div className="todo-item">
      {/*on clicking the circle, toggle the status of the todo item*/}
      <span className="todo-item__completed" onClick={() => setTodo(!isDone)}>
        {isDone && <img alt="done" src={`${process.env.PUBLIC_URL}/tick.png`} />}
      </span>
      <span className="todo-item__name">{name}</span>
    </div>
  );

export default TodoItem;
