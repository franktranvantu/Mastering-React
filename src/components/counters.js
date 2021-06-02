import React from 'react';
import Counter from "./counter";

const Counters = props => {
  return (
    <div>
      <button onClick={props.onReset} className="btn btn-primary m-2">Reset</button>
      {props.counters.map(counter =>
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={props.onIncrement}
          onDelete={props.onDelete} />)
      }
    </div>
  );
}

export default Counters;