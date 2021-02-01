import React from "react";

const TodoItem = ({ name, isDone }) => (
  <div>
    <span>
      {isDone && (
        <img
          height="16"
          alt="done"
          src={`${process.env.PUBLIC_URL}/tick.png`}
        />
      )}
    </span>
    <span>{name}</span>
  </div>
);

export default TodoItem;
