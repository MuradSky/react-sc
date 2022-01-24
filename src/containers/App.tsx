import React, { useState } from 'react';
import TestTypeScriptProps from './TestTypeScriptProps';

interface Data {
    hello: string;
    year: number;
    count: number;
    increment: () => void;
}

function App() {
    const [count, setCount] = useState<number>(0);
    const handleClick = () => setCount((state) => state + 1);

    const state: Data = {
        hello: 'Привет TS',
        year: 2022,
        count: count,
        increment: handleClick,
    };

    return (
        <div className="App">
            <h1>Hello Soundcloud</h1>
            <TestTypeScriptProps data={state} />
        </div>
    );
}

export default App;
