import React, {Component} from 'react';

class Counter1 extends Component {
  state = {
    count: 0
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <p>Count 1: {this.state.count}</p>
        <button onClick={this.increaseCount}>Increase</button>
      </div>
    );
  }
}

export default Counter1;