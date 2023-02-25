import React, { Component } from "react";
export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialCount
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => this.changeCount(-1)}>-</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.changeCount(1)}>+</button>
      </div>
    );
  }

  changeCount(amount) {
    //without prev state
    //this.setState({ count: this.state.count + amount });
    //this.setState({ count: this.state.count + amount });
    //With previous state as Set state is asynchronous so calling
    //it twice will only show the effect of being called in once.
    this.setState((prevState) => {
      return { count: prevState.count + amount };
    });
  }
}
