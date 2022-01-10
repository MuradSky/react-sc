import React from 'react';

function TestTypeScriptProps(props: {
  hello: string;
  year: number;
  count: any;
  Increment: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const { hello, year, count, Increment } = props;
  return (
    <div>
      <p>{hello}</p>
      <p>{year}</p>
      <p>{count}</p>
      <button type="button" onClick={Increment}>
        Increment
      </button>
    </div>
  );
}

export default TestTypeScriptProps;
