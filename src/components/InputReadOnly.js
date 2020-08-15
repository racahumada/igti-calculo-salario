import React, { Component } from 'react';

export default class InputReadOnly extends Component {
  constructor() {
    super();
    this.state = {
      valueSalary: 0,
      inssDesc: '',
    };
  }
  componentDidMount() {
    const { fullSalary } = this.props;
    this.setState({
      valueSalary: fullSalary,
    });
  }
  baseInss = () => {
    const { fullSalary } = this.props;
    return fullSalary.toLocaleString('pt-BR', {
      maximumFractionDigits: 2,
      style: 'currency',
      currency: 'BRL',
    });
  };
  calculationINSS = () => {
    const { fullSalary } = this.props;
    // console.log('Dentro do Calculation(): ' + fullSalary);
    let [fx1, fx2, fx3, fx4] = [0, 0, 0, 0];
    console.log('fora do if');
    if (fullSalary > 0) {
      console.log('dentro do if');
      fx1 = fullSalary < 1045 ? fullSalary * 0.075 : 1045 * 0.075;
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
      const sum = fx1 + fx2 + fx3 + fx4;
      return sum;
      // return sum.toLocaleString('pt-BR', {
      //   maximumFractionDigits: 2,
      //   style: 'currency',
      //   currency: 'BRL',
      // });
    }
  };

  calcBaseIr = (base, desc) => {
    console.log(base + ' ' + desc);
    base = parseFloat(base);
    desc = parseFloat(desc);
    if (base > 0) {
      const baseIr = base - desc;
      return baseIr;
    }
  };

  render() {
    const baseInss = this.baseInss();
    const descInss = this.calculationINSS();
    const baseIr = this.calcBaseIr(baseInss, descInss);
    return (
      <div className="row">
        <span className="col s3">
          <label>Base INSS</label>
          <input
            type="text"
            name="baseInss"
            id="baseInss"
            value={baseInss}
            readOnly
          />
        </span>
        <span className="col s3">
          <label>Desconto INSS</label>
          <input
            type="text"
            name="descInss"
            id="descInss"
            defaultValue="0"
            value={descInss}
            readOnly
          />
        </span>
        <span className="col s3">
          <label>Base IRPF</label>
          <input
            type="number"
            name="baseIr"
            id="baseIr"
            defaultValue="0"
            value={baseIr}
            readOnly
          />
        </span>
        <span className="col s3">
          <label>Desconto IRPF</label>
          <input
            type="number"
            name="descIr"
            id="descIr"
            defaultValue="0"
            //value={descIr}
            readOnly
          />
        </span>
      </div>
    );
  }
}
