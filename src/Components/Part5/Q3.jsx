import React, { useState, memo } from 'react';

const HeavyCalculation = memo(({ number }) => {
  console.log('HeavyCalculation re-rendered');
  
  // Simulate a heavy calculation
  const calculateFactorial = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  };

  const result = calculateFactorial(number);

  return (
    <div>
      <h2>Factorial of {number}: {result}</h2>
    </div>
  );
});

// Main Component
const AppHeavy = () => {
  const [count, setCount] = useState(0); 
  const [number, setNumber] = useState(5); 

  return (
    <div>
      <h1>Heavy Calculation Optimization Example</h1>
      
      <button onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>

      <button onClick={() => setNumber(number + 1)}>
        Increase Number for Calculation: {number}
      </button>

      <HeavyCalculation number={number} />
    </div>
  );
};

export default AppHeavy;
