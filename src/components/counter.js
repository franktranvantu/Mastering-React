import React, {Component} from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>{this.state.tags.map((tag, index) => <li key={index}>{tag}</li>)}</ul>
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