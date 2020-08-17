import React, { Component } from 'react';
import css from './progressBar.module.css';

export default class ProgressBarSalary extends Component {
  render() {
    const { percInss, percIr, percLiquid } = this.props;
    const styleInss = {
      width: `${percInss}%`,
    };
    const styleIr = {
      width: `${percIr}%`,
    };
    const styleLiquid = {
      width: `${percLiquid}%`,
    };
    return (
      <div className={css.flexBar}>
        <div className={css.inss} style={styleInss}></div>
        <div className={css.ir} style={styleIr}></div>
        <div className={css.liquid} style={styleLiquid}></div>
      </div>
    );
  }
}
