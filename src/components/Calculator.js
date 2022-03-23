import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calc, setCalc] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleCalculate = (event) => {
    setCalc((calc) => calculate(calc, event.target.textContent));
  };

  return (
    <div className="body">
      <h2>Lets Do Some Math!</h2>
      <div className="grid-container">
        <p className="item0">
          {calc.total}
          {' '}
          {calc.operation}
          {' '}
          {calc.next}
        </p>
        <button onClick={handleCalculate} type="button" className="item1 item">AC</button>
        <button onClick={handleCalculate} type="button" className="item2 item">+/-</button>
        <button onClick={handleCalculate} type="button" className="item3 item">%</button>
        <button onClick={handleCalculate} type="button" className="item4 item">÷</button>
        <button onClick={handleCalculate} type="button" className="item5 item">7</button>
        <button onClick={handleCalculate} type="button" className="item6 item">8</button>
        <button onClick={handleCalculate} type="button" className="item7 item">9</button>
        <button onClick={handleCalculate} type="button" className="item8 item">x</button>
        <button onClick={handleCalculate} type="button" className="item9 item">4</button>
        <button onClick={handleCalculate} type="button" className="item10 item">5</button>
        <button onClick={handleCalculate} type="button" className="item11 item">6</button>
        <button onClick={handleCalculate} type="button" className="item12 item">-</button>
        <button onClick={handleCalculate} type="button" className="item13 item">1</button>
        <button onClick={handleCalculate} type="button" className="item14 item">2</button>
        <button onClick={handleCalculate} type="button" className="item15 item">3</button>
        <button onClick={handleCalculate} type="button" className="item16 item">+</button>
        <button onClick={handleCalculate} type="button" className="item17 item">0</button>
        <button onClick={handleCalculate} type="button" className="item18 item">.</button>
        <button onClick={handleCalculate} type="button" className="item19 item">=</button>
      </div>
    </div>
  );
};

export default Calculator;
