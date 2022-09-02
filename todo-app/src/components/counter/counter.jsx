import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './counter.css'


class Counter extends Component{

  constructor() {
    super();

    this.state = {
        counter: 0
    }
    this.increment = this.increment.bind(this)
}

  render() {
    return (
      <div className="Counter">
      <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
      <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
      <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
      <span className="count"> {this.state.counter} </span>
      <div><button className='reset' onClick={this.reset}> reset </button></div>
      </div>
    );
  }

  reset = () => {
    this.setState({counter: 0});
  }

  increment = (by) => {
    this.setState(
      (prevState) => {
       return {counter: prevState.counter + by}
   }
   );
  }

  decrement = (by) => {
    this.setState(
      (prevState) => {
       return {counter: prevState.counter - by}
   }
   );
  }

}
//class component
class CounterButton extends Component {

    //Define the initial state in a constructor
    //state => counter 0
    constructor() {
        super();

        // this.state = {
        //     counter: 0
        // }

       // this.increment = this.increment.bind(this)
    }


  render = () => {
    return (
      <div className="counter">
       <button onClick={() => this.props.incrementMethod(this.props.by)}> +{this.props.by} </button>
       <button onClick={() => this.props.decrementMethod(this.props.by)}> -{this.props.by} </button>
      {/*<span className="count"> {this.state.counter} </span>*/}
      </div>
    );
  }

  // increment = () => {

  //   this.setState({
  //       counter: this.state.counter + this.props.by
  //   });
  //   this.props.incrementMethod(this.props.by);
  // }

  // decrement = () => {

  //   this.setState({
  //       counter: this.state.counter - this.props.by
  //   });
  //   this.props.decrementMethod(this.props.by);
  // }

}

CounterButton.defaultProps = {
  by: 1
}

CounterButton.propTypes = {
  by : PropTypes.number
}

  export default Counter;
