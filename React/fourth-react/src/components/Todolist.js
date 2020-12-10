import React, { Component } from "react";

export default class Todolist extends Component {
  state = {
    inputValue: "",
    todoList: [
      {
        id: 1,
        task: "Do Homework",
      },
      {
        id: 2,
        task: "Swimming",
      },
      {
        id: 3,
        task: "Shopping",
      },
    ],
  };
  createNewTask() {
    const newTask = this.state.inputValue;
    const newTodoList = [...this.state.todoList];
    newTodoList.push({ task: newTask, id: Math.round(Math.random() * 1000) });
    this.setState({ todoList: newTodoList });
    this.setState({ inputValue: "" });
  }
  deleteTask = (iid) => {
    const newTodoList = this.state.todoList.filter(
      ({ id, task }) => id !== iid
    );

    this.setState({ todoList: newTodoList });
  };
  render() {
    const { todoList, inputValue } = this.state;
    return (
      <div>
        <div>
          <input
            value={inputValue}
            onChange={(e) => this.setState({ inputValue: e.target.value })}
          ></input>
          <button onClick={() => this.createNewTask()}>Add todo</button>
        </div>
        <div>
          <ul style={{ width: "400px", margin: "0 auto" }}>
            {todoList.map((todo) => (
              <li key={todo.id}>
                {todo.task}
                <button onClick={() => this.deleteTask(todo.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
