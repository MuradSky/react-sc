import React, { useState } from 'react';
import TestTypeScriptProps from './TestTypeScriptProps';

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((state) => state + 1);
  return (
    <div className="App">
      <h1>Hello Soundcloud</h1>
      <TestTypeScriptProps hello="Привет TS" year={2022} count={count} Increment={handleClick} />
    </div>
  );
}

export default App;
