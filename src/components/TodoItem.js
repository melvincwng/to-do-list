import React from "react";
import './TodoItem.css';

const TodoItem = ({ name, isDone }) => (
  <div className="todo-item">
    <span className="todo-item__completed">
      {isDone && (
        <img
          height="16"
          alt="done"
          src={`${process.env.PUBLIC_URL}/tick.png`}
        />
      )}
    </span>
    <span className="todo-item__name">{name}</span>
  </div>
);

export default TodoItem;
