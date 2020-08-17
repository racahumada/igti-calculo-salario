import React, { Component } from 'react';
import InputFullSalary from './components/InputFullSalary';
import InputReadOnly from './components/InputReadOnly';
import ProgressBarSalary from './components/ProgressBarSalary';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fullSalary: 0,
    };
  }
  valueChange = (value) => {
    this.setState({
      fullSalary: value,
    });
  };

  baseInss = () => {
    const { fullSalary } = this.state;
    return fullSalary;
  };
  calculationINSS = () => {
    const { fullSalary } = this.state;
    let [fx1, fx2, fx3, fx4, fx5] = [0, 0, 0, 0, 0];
    console.log('fora do if');
    if (fullSalary >= 0) {
      console.log('dentro do if');
      fx1 =
        fullSalary < 1045
          ? fullSalary * 0.075
          : fullSalary <= 6010.06
          ? 1045 * 0.075
          : 0;
      fx2 =
        fullSalary >= 1045.01 && fullSalary <= 2089.6
          ? (fullSalary - 1045) * 0.09
          : fullSalary > 2089.6 && fullSalary < 6101.06
          ? (2089.6 - 1045) * 0.09
          : 0;
      fx3 =
        fullSalary >= 2089.61 && fullSalary <= 3134.4
          ? (fullSalary - 2089.6) * 0.12
          : fullSalary > 3134.4 && fullSalary < 6101.06
          ? (3134.4 - 2089.6) * 0.12
          : 0;
      fx4 =
        fullSalary >= 3134.41 && fullSalary <= 6101.06
          ? (fullSalary - 3134.4) * 0.14
          : 0;
      fx5 = fullSalary > 6101.06 ? 713.1 : 0;
      const sum = fx1 + fx2 + fx3 + fx4 + fx5;
      return sum;
      // return sum.toLocaleString('pt-BR', {
      //   maximumFractionDigits: 2,
      //   style: 'currency',
      //   currency: 'BRL',
      // });
    }
  };

  calcBaseIr = (base, desc) => {
    base = parseFloat(base);
    desc = parseFloat(desc);
    const baseIr = base - desc;
    return baseIr;
  };

  calcDescIr = (base) => {
    const desc =
      base > 1903.98
        ? base >= 1903.99 && base <= 2826.65
          ? base * 0.075 - 142.8
          : base >= 2826.66 && base <= 3751.05
          ? base * 0.15 - 354.8
          : base >= 3751.06 && base <= 4664.68
          ? base * 0.225 - 636.13
          : base > 4664.68
          ? base * 0.275 - 869.36
          : 0
        : 0;
    return desc;
  };

  percentInss = (base, descInss) => {
    let percent = 0;
    if (base !== 0) {
      percent = (descInss * 100) / base;
    }
    return percent;
  };

  percentIr = (base, descIr) => {
    let percent = 0;
    if (base !== 0) {
      percent = (descIr * 100) / base;
    }
    return percent;
  };

  percentLiquid = (base, descIr) => {
    let percent = 0;
    if (base !== 0) {
      percent = (descIr * 100) / base;
    }
    return percent;
  };

  liquidSalary = (base, descInss, descIr) => {
    return base - descInss - descIr;
  };

  render() {
    const { fullSalary } = this.state;
    const baseInss = this.baseInss();
    const descInss = this.calculationINSS();
    const baseIr = this.calcBaseIr(baseInss, descInss);
    const descIr = this.calcDescIr(baseIr);
    const liquidSalary = this.liquidSalary(baseInss, descInss, descIr);
    const percInss = this.percentInss(baseInss, descInss);
    const percIr = this.percentIr(baseInss, descIr);
    const percLiquid = this.percentLiquid(baseInss, liquidSalary);

    return (
      <div className="container">
        <h3>React Salário</h3>
        <InputFullSalary
          fullSalary={fullSalary}
          valueChange={this.valueChange}
        />
        <InputReadOnly
          baseInss={baseInss}
          descInss={descInss}
          baseIr={baseIr}
          descIr={descIr}
          liquidSalary={liquidSalary}
          percInss={percInss}
          percIr={percIr}
          percLiquid={percLiquid}
        />
        <ProgressBarSalary
          percInss={percInss}
          percIr={percIr}
          percLiquid={percLiquid}
        />
      </div>
    );
  }
}
