import React from "react";
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from "uuid"; // 1. import the UUID

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuidv4(), // 2. add uuid to the item
          name: "Buy Milk",
          isDone: false,
        },
        {
          id: uuidv4(), // 3.add uuid to the item
          name: "Do push up",
          isDone: true,
        },
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

      // add a delete function
      const deleteTodo = () => {
        const todosWithoutItem = this.state.todos.filter(
          todoToFilter => todoToFilter.id !== todo.id,
        );
        this.setState({ todos: [...todosWithoutItem] });
      };

      // 5. pass in the method as a prop to Todo component
      return (
        <TodoItem 
        key={todo.id}
        name={todo.name} 
        isDone={todo.isDone} 
        setTodo={setTodo} 
        deleteTodo={deleteTodo}/>
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
      <div>
        <div>Todolist</div>
        <input 
        type="text"
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
