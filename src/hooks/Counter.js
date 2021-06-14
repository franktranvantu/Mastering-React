import React, {useState} from 'react';
import useDocumentTitle from "./useDocumentTitle";

function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useDocumentTitle(`${name} has clicked ${count} times!`);

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <p>{name} has click {count} times!</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;