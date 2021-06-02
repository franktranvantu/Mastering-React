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

  handleDelete = id => {
    this.setState({
      counters: this.state.counters.filter(counter => counter.id !== id)
    })
  }

  render() {
    return (
      <div>
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