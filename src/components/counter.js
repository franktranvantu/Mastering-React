import React, {Component} from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    console.log('Increment Clicked' + this.state.count);
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  getBadgeClasses() {
    const {count} = this.state;
    let classes = 'badge m-2 badge-';
    classes += count === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const {count} = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;