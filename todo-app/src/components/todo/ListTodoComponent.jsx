import React, { Component } from 'react'

class ListTodoComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        todo: [
          {
            id: 1,
            description: "learn react",
            done: false,
            targetDate: new Date(),
          },
          {
            id: 2,
            description: "become an expert in react",
            done: false,
            targetDate: new Date(),
          },
          {
            id: 3,
            description: "being full stack",
            done: false,
            targetDate: new Date(),
          },
        ],
      };
    }
    render() {
      return (
        <div>
          <h1>Todo List</h1>
          <div className="container"></div>
          <table className="table">
            <thead>
              <tr>
                <th> description </th>
                <th> is completed? </th>
                <th> Target Date </th>
              </tr>
            </thead>
            <tbody>
              {this.state.todo.map((todo) => (
                <tr key={todo.id}>
                  <td> {todo.description} </td>
                  <td> {todo.done.toString()} </td>
                  <td> {todo.targetDate.toString()} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }

  export default ListTodoComponent