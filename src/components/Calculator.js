import React, { Component } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleCalculate = (event) => {
    this.setState((state) => calculate(state, event.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="grid-container">
        <p className="item0">
          {total}
          {' '}
          {operation}
          {' '}
          {next}
        </p>
        <button onClick={this.handleCalculate} type="button" className="item1">AC</button>
        <button onClick={this.handleCalculate} type="button" className="item2">+/-</button>
        <button onClick={this.handleCalculate} type="button" className="item3">%</button>
        <button onClick={this.handleCalculate} type="button" className="item4">÷</button>
        <button onClick={this.handleCalculate} type="button" className="item5">7</button>
        <button onClick={this.handleCalculate} type="button" className="item6">8</button>
        <button onClick={this.handleCalculate} type="button" className="item7">9</button>
        <button onClick={this.handleCalculate} type="button" className="item8">x</button>
        <button onClick={this.handleCalculate} type="button" className="item9">4</button>
        <button onClick={this.handleCalculate} type="button" className="item10">5</button>
        <button onClick={this.handleCalculate} type="button" className="item11">6</button>
        <button onClick={this.handleCalculate} type="button" className="item12">-</button>
        <button onClick={this.handleCalculate} type="button" className="item13">1</button>
        <button onClick={this.handleCalculate} type="button" className="item14">2</button>
        <button onClick={this.handleCalculate} type="button" className="item15">3</button>
        <button onClick={this.handleCalculate} type="button" className="item16">+</button>
        <button onClick={this.handleCalculate} type="button" className="item17">0</button>
        <button onClick={this.handleCalculate} type="button" className="item18">.</button>
        <button onClick={this.handleCalculate} type="button" className="item19">=</button>
      </div>
    );
  }
}

export default Calculator;
