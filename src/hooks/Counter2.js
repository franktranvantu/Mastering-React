import React, {useState} from 'react';

const Counter2 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count 2: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter2;