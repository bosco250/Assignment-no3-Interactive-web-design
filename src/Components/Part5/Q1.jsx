import React, { useState, memo } from 'react';

const Child = memo(({ value }) => {
  console.log('Child re-rendered');
  return <p>Value from Parent: {value}</p>;
});

const Parent = () => {
  const [value, setValue] = useState(0); 
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={() => setValue(value + 1)}>Update Child Prop</button>
      <button onClick={() => setCount(count + 1)}>Update Unrelated State</button>
      <Child value={value} />
    </div>
  );
};

export default Parent;
