import React from "react";
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from "uuid"; // 1. import the UUID
import '../App.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuidv4(), // 2. add uuid to the item
          name: "Learn Coding",
          isDone: false,
        },
        {
          id: uuidv4(), // 3.add uuid to the item
          name: "Practice coding problems",
          isDone: true,
        },
        {
          id: uuidv4(), // 2. add uuid to the item
          name: "Codecademy",
          isDone: false,
        },
      ],

      title: props.title
    };
  }

  createSetTodo(todo) {
    return isDone => {
      const currentTodo = this.state.todos.filter(
        todoToFilter => todoToFilter.id === todo.id,
      )[0];
      currentTodo.isDone = isDone;
      this.setState({ todos: [...this.state.todos] });
    };
  }

  createDeleteTodo(todo) {
    return () => {
      const todosWithoutItem = this.state.todos.filter(
        todoToFilter => todoToFilter.id !== todo.id,
      );
      this.setState({ todos: [...todosWithoutItem] });
    };
  }

  displayTodos() {
    return this.state.todos.map(todo => {
      const setTodo = this.createSetTodo(todo);
      const deleteTodo = this.createDeleteTodo(todo);

      return (
        <TodoItem
          key={todo.id}
          name={todo.name}
          isDone={todo.isDone}
          setTodo={setTodo}
          deleteTodo={deleteTodo}
        />
      );
    });
  }


  handleChange = (event) => {
    this.setState({ newItemName: event.target.value });
  };
  
  addNewTodo() {
    const { newItemName: name } = this.state;
    // lines 60 & 61 prevent empty tasks from being added
    if (!name || !name.length) {
      return;
    }

    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuidv4(),
          name: name,
          isDone: false,
        },
      ],
    });
  }

  
  render() {
    return (
      <div className="column">
        <div>
          <b>{this.state.title}</b>
        </div>
        <input 
        type="text"
        aria-label="filter-text"
        value={this.state.newItemName}
        onChange={this.handleChange}
        placeholder="Take a break"
        />
        <button onClick={() => this.addNewTodo()}>add</button>
        <div>{this.displayTodos()}</div>
      </div>
    );
  }
}

export default TodoList;
