import React, { useState, memo } from 'react';

// UnrelatedList Component - Displays a list of items, optimized with React.memo
const UnrelatedList = memo(({ items }) => {
  console.log('UnrelatedList re-rendered');
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
});

// Counter Component
const Counter = () => {
  const [count, setCount] = useState(0);
  const [list] = useState(['Apple', 'Banana', 'Cherry']); // Static list of items

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Counter</button>
      <h2>Unrelated List</h2>
      <UnrelatedList items={list} />
    </div>
  );
};

export default Counter;
