import React, { Component } from 'react';
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import ThirdComponent from './components/ThirdComponent'
import Counter from './components/counter/counter'
import logo from './logo.svg';
import './css/App.css';
import './css/Bootstrap.css';
import TodoApp from './components/todo/TodoApp'
 
class App extends Component {
  render() {
    return (
      <div className="App">
      {/*<Counter/>*/}
      <TodoApp/>
      </div>
    );
  }
}

class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponents">
      Juli Parodi
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}
export default App;
