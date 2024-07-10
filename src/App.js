import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  //increment
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  //decrement
  decrement = () => {
     

    if (this.state.count>0) {
      this.setState({
        count: this.state.count - 1,
      });
    }else{
      alert("you can't read")
    }
    
  
  };

  componentDidMount() {
    console.log("componentDidUpdate/");
  }

  render() {
    return (
      <div className="App">
        <h1>hello sana</h1>

        <div>
          <button onClick={this.decrement}> - </button>

          <span> {this.state.count} </span>

          <button onClick={this.increment}> + </button>
        </div>
      </div>
    );
  }
}
