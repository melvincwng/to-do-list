import React from "react";
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from "uuid"; // 1. import the UUID

class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: uuidv4(), name: "Buy Milk", isDone: false}, // 2. add uuid to the item
                { id: uuidv4(), name: "Do push up", isDone: true}, // 3. add uuid to the item
            ],
        };
    }

    displayTodos() {
        return this.state.todos.map((todo) => {
          // 4. add a method that can change the status of isDone
          const setTodo = (isDone) => {
            const currentTodo = this.state.todos.filter(
              (todoToFilter) => todoToFilter.id === todo.id
            )[0];
            currentTodo.isDone = isDone;
            this.setState({ todos: [...this.state.todos] });
          };
          // 5. pass in the method as a prop to Todo component
          return (
            <TodoItem name={todo.name} isDone={todo.isDone} setTodo={setTodo} />
          );
        });
      }

  render() {
    return (
      <div>
        <div>Todolist</div>
        <div>{this.displayTodos()}</div>
      </div>
    );
  }
}

export default Todolist;
