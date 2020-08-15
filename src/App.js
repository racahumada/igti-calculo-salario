import React, { Component } from 'react';
import InputFullSalary from './components/InputFullSalary';
import InputReadOnly from './components/InputReadOnly';
import ProgressBarSalary from './components/ProgressBarSalary';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fullSalary: 0,
      descInss: 0,
      baseIr: 0,
      descIr: 0,
    };
  }
  valueChange = (value) => {
    this.setState({
      fullSalary: value,
    });
    //console.log('No valueChange ' + this.state.fullSalary + ' ' + value);
  };
  // valuesCalc = (valueDescInss, valueBaseIr, valueDescIr) => {
  //   this.setState({
  //     descInss: valueDescInss,
  //     baseIr: valueBaseIr,
  //     descIr: valueDescIr,
  //   });
  // };
  render() {
    const { fullSalary, descInss, baseIr, descIr } = this.state;
    return (
      <div className="container">
        <h3>React Salário</h3>
        <InputFullSalary
          fullSalary={fullSalary}
          valueChange={this.valueChange}
        />
        <InputReadOnly
          fullSalary={fullSalary}
          // valuesCalculation={this.valuesCalc}
          descInss={descInss}
          baseIr={baseIr}
          descIr={descIr}
        />
        <ProgressBarSalary />
      </div>
    );
  }
}
