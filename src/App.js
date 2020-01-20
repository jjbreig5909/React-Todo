import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';


const tasks = [
  {
    name: "Play Video Games",
    id: 1,
    complete: false
  },
  {
    name: "Take Pictures",
    id: 2,
    complete: false
  },
  {
    name: "Get Passport",
    id: 3,
    complete: false
  },
  {
    name: "Run mile",
    id: 4,
    complete: false
  },
  {
    name: "Work Out",
    id: 5,
    complete: false
  },
  {
    name: "Walk Dogs",
    id: 6,
    complete: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.

  state = {
    todoList: tasks,
  }
  // design `App` to be the parent component of your application.

  addNewTask = newItemName => {
    const newState = {
      ...this.state,
      todoList: [
        ...this.state.todoList,
        { name: newItemName, complete: false, id: Date.now() }
      ]
    };
    this.setState(newState);
  };

  toggleComplete = id => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.map(task => {
        if (task.id === id) {
          return {
            ...task,
            complete: !task.complete
          };
        }
        return task;
      })
    };
    this.setState(newState);
  };

  clearCompleted = () => {
    console.log("Clearing")
    const newState = {
      ...this.state,
      todoList: this.state.todoList.filter(task => {
        return !task.complete;
      })
    };
    this.setState(newState);
  };
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
        <div className="App">
          <div className="header">
            <h1>Todo List</h1>
            <TodoForm addNewTask={this.addNewTask} />
          </div>
          <TodoList
            tasks={this.state.todoList}
            toggleComplete={this.toggleComplete}
            clearComplete={this.clearCompleted}
          />
        </div>
    );
  }
}

export default App;
