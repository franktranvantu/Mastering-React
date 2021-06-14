import React, {useEffect, useState} from 'react';

function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // useEffect(() => {
  //   document.title = `${name} has clicked ${count} times!`;
  // }); // componentDidUpdate

  // useEffect(() => {
  //   document.title = `${name} has clicked ${count} times!`;
  // }, [name]); // componentDidMount

  useEffect(() => {
    document.title = `${name} has clicked ${count} times!`;

    return () => {
      console.log('Clean up.');
    }
  }, [count]); // componentWillUnmount

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <p>{name} has click {count} times!</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;