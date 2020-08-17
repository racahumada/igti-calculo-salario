import React, { Component } from 'react';
import { formatNumber, formatPerc } from '../format/formatNumbers';

export default class InputReadOnly extends Component {
  render() {
    const {
      baseInss,
      descInss,
      baseIr,
      descIr,
      liquidSalary,
      percInss,
      percIr,
      percLiquid,
    } = this.props;
    const valueInss = `${formatNumber(descInss)} (${formatPerc(percInss)}%)`;
    const valueIr = `${formatNumber(descIr)} (${formatPerc(percIr)}%)`;
    const valueLiquid = `${formatNumber(liquidSalary)} (${formatPerc(
      percLiquid
    )}%)`;
    return (
      <div className="row">
        <span className="col s3">
          <label>Base INSS</label>
          <input
            type="text"
            name="baseInss"
            id="baseInss"
            value={formatNumber(baseInss)}
            readOnly
          />
        </span>
        <span className="col s3">
          <label>Desconto INSS</label>
          <input
            type="text"
            name="descInss"
            id="descInss"
            value={valueInss}
            readOnly
          />
        </span>
        <span className="col s3">
          <label>Base IRPF</label>
          <input
            type="text"
            name="baseIr"
            id="baseIr"
            value={formatNumber(baseIr)}
            readOnly
          />
        </span>
        <span className="col s3">
          <label>Desconto IRPF</label>
          <input
            type="text"
            name="descIr"
            id="descIr"
            value={valueIr}
            readOnly
          />
        </span>
        <span className="col s3">
          <label>Salário Líquido</label>
          <input
            type="text"
            name="salLiq"
            id="salLiq"
            value={valueLiquid}
            readOnly
          />
        </span>
      </div>
    );
  }
}
