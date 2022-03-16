import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="grid-container">
        <div className="item0">0</div>
        <div className="item1">AC</div>
        <div className="item2">+/-</div>
        <div className="item3">%</div>
        <div className="item4">/</div>
        <div className="item5">7</div>
        <div className="item6">8</div>
        <div className="item7">9</div>
        <div className="item8">*</div>
        <div className="item9">4</div>
        <div className="item10">5</div>
        <div className="item11">6</div>
        <div className="item12">-</div>
        <div className="item13">1</div>
        <div className="item14">2</div>
        <div className="item15">3</div>
        <div className="item16">+</div>
        <div className="item17">0</div>
        <div className="item18">.</div>
        <div className="item19">=</div>
      </div>
    );
  }
}

export default Calculator;
