import React from 'react';

function TestTypeScriptProps(props: {
  hello: string;
  year: number;
  count: number;
  increment: () => void;
}) {
  const { hello, year, count, increment } = props;
  return (
    <div>
      <p>{hello}</p>
      <p>{year}</p>
      <p>{count}</p>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default TestTypeScriptProps;
