import React, { useState } from 'react';
import Counter from './Counter';
const App = () => {
  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <Counter count={count} incrementHandler={incrementHandler} />
    </div>
  );
};

export default App;
