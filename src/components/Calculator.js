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
    <div className="grid-container">
      <p className="item0">
        {calc.total}
        {' '}
        {calc.operation}
        {' '}
        {calc.next}
      </p>
      <button onClick={handleCalculate} type="button" className="item1">AC</button>
      <button onClick={handleCalculate} type="button" className="item2">+/-</button>
      <button onClick={handleCalculate} type="button" className="item3">%</button>
      <button onClick={handleCalculate} type="button" className="item4">÷</button>
      <button onClick={handleCalculate} type="button" className="item5">7</button>
      <button onClick={handleCalculate} type="button" className="item6">8</button>
      <button onClick={handleCalculate} type="button" className="item7">9</button>
      <button onClick={handleCalculate} type="button" className="item8">x</button>
      <button onClick={handleCalculate} type="button" className="item9">4</button>
      <button onClick={handleCalculate} type="button" className="item10">5</button>
      <button onClick={handleCalculate} type="button" className="item11">6</button>
      <button onClick={handleCalculate} type="button" className="item12">-</button>
      <button onClick={handleCalculate} type="button" className="item13">1</button>
      <button onClick={handleCalculate} type="button" className="item14">2</button>
      <button onClick={handleCalculate} type="button" className="item15">3</button>
      <button onClick={handleCalculate} type="button" className="item16">+</button>
      <button onClick={handleCalculate} type="button" className="item17">0</button>
      <button onClick={handleCalculate} type="button" className="item18">.</button>
      <button onClick={handleCalculate} type="button" className="item19">=</button>
    </div>
  );
};

export default Calculator;
