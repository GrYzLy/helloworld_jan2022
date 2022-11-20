import React, {Component, useState} from 'react';
const CounterHooks = props =>  {

  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>
        Counter: {counter}
      </p>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  )
}

export default CounterHooks;
