import React, { Component } from 'react';
import InputFullSalary from './components/InputFullSalary';
import InputReadOnly from './components/InputReadOnly';
import ProgressBarSalary from './components/ProgressBarSalary';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fullSalary: '0',
    };
  }
  render() {
    return (
      <div className="container">
        <h3>React Salário</h3>
        <InputFullSalary />
        <InputReadOnly />
        <ProgressBarSalary />
      </div>
    );
  }
}
