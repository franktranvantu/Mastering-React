import React, {Component} from 'react';

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.props.onIncrement} className="btn btn-secondary btn-sm">Increment</button>
        <button onClick={this.props.onDelete} className="btn btn-danger m-2">Delete</button>
      </div>
    );
  }

  getBadgeClasses() {
    const {value} = this.props;
    let classes = 'badge m-2 badge-';
    classes += value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const {value} = this.props;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;