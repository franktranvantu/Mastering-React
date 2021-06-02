import React, {Component} from 'react';
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      {id: 1, value: 3},
      {id: 2, value: 0},
      {id: 3, value: 0}
    ]
  }

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({counters});
  }

  handleDelete = id => {
    this.setState({
      counters: this.state.counters.filter(counter => counter.id !== id)
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-primary m-2">Reset</button>
        {this.state.counters.map(counter =>
          <Counter
            key={counter.id}
            value={counter.value}
            onDelete={() => this.handleDelete(counter.id)} />)
        }
      </div>
    );
  }
}

export default Counters;