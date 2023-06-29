import React, { useState } from 'react';
import styles from './Calculator.module.css';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e, inputNum) => {
    const value = e.target.value;
    if (inputNum === 1) {
      setNum1(value);
    } else {
      setNum2(value);
    }
  };

  const handleAddition = () => {
    const sum = Number(num1) + Number(num2);
    setResult(sum);
  };

  const handleSubtraction = () => {
    const difference = Number(num1) - Number(num2);
    setResult(difference);
  };

  const handleMultiplication = () => {
    const product = Number(num1) * Number(num2);
    setResult(product);
  };

  const handleDivision = () => {
    const quotient = Number(num1) / Number(num2);
    setResult(quotient);
  };

  return (
    <div className={styles.calculator}>
      <h1>Calculator</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => handleInputChange(e, 1)}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => handleInputChange(e, 2)}
      />
      <div className={styles.buttons}>
        <button onClick={handleAddition}>Addition</button>
        <button onClick={handleSubtraction}>Subtraction</button>
        <button onClick={handleMultiplication}>Multiplication</button>
        <button onClick={handleDivision}>Division</button>
      </div>
      {result && <h1>Result: {result}</h1>}
    </div>
  );
};

export default Calculator;
