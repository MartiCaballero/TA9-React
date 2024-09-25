import React, { useState, useEffect } from 'react';
import './TA9.css'; 

const Counter = () => {
  const [count, setCount] = useState(0);

  
  useEffect(() => {
    document.title = `Contador: ${count}`;
  }, [count]); 

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h1>Contador: {count}</h1>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
      <button onClick={handleReset}>Reiniciar</button>
    </div>
  );
};

export default Counter;
